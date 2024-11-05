import remarkParse from 'remark-parse';
import remarkInlineLinks from 'remark-inline-links';
import remarkGfm from 'remark-gfm';
import { unified } from 'unified';
import { Root as MdastRoot } from 'mdast';
import { Root as XastRoot } from 'xast';
import { x } from 'xastscript';
import { Heading, PhrasingContent, RootContent, Text } from 'mdast';
import { Element, ElementContent } from 'xast';
import { xmlStringify } from './xml-stringify';

const headingNames = ['', 'chapter', 'section', 'subsection'];
const headingPrefixes = ['', 'ch', 'sec', 'sub'];

export function convertMarkdown(text: string): string {
  return (
    unified()
      .use(remarkParse)
      .use(remarkInlineLinks)
      .use(remarkGfm)
      .use(mdToPtx)
      // @ts-expect-error until the types cooperate
      .use(xmlStringify, {})
      .processSync(text)
      .toString()
  );
}

function mdToPtx() {
  return (tree: MdastRoot): XastRoot => makePtx(tree);
}

// TODO consider using  https://unifiedjs.com/explore/package/unist-util-is/
function makePtx(mdTree: MdastRoot): XastRoot {
  // We technically shouldn't have to create this oneEl, but the types are not cooperating
  const rootEl = x('root');
  const root: XastRoot = x(null, [rootEl]);
  const ptxStack: [number, Element][] = [[0, rootEl]];
  let ptxCurr: ElementContent[] = [];
  function closeHeadingsNoHigherThan(depth: number) {
    while (ptxStack.length > 0) {
      const [nextDepth, nextHeading] = ptxStack.pop()!;
      // Any current contents belong to the last heading
      nextHeading.children.push(...ptxCurr.filter((x) => x));
      if (nextDepth >= depth) {
        // If this heading is to end, set it to be absorbed into its parent
        ptxCurr = [nextHeading];
      } else {
        // Otherwise put it back in the stack and clear the current contents
        // Then stop
        ptxStack.push([nextDepth, nextHeading]);
        ptxCurr = [];
        break;
      }
    }
  }
  for (const node of mdTree.children) {
    if (node.type == 'heading' && node.depth <= 3) {
      closeHeadingsNoHigherThan(node.depth);
      const headingElement = makeHeading(node);
      ptxStack.push([node.depth, headingElement]);
    } else {
      const ptxNode = convertNode(node);
      if (ptxNode) {
        ptxCurr.push(ptxNode);
      }
    }
  }
  closeHeadingsNoHigherThan(0);
  // If all has gone well this last call should have resulted in
  // a root element as the only element in ptxCurr
  if (ptxCurr.length != 1) {
    throw new Error(`Excepted current length 1 but found ${ptxCurr.length}\n.`);
  }
  // Remove the rootEl now that we no longer need it
  root.children = rootEl.children;
  return root;
}

// Creates a heading element.
function makeHeading(node: Heading): Element {
  const headingChildren = node.children.map(convertNode);
  const title = `${headingPrefixes[node.depth]}-${extractText(node.children).replace(/\W+/g, '-').toLowerCase()}`;
  const headingElement = x(headingNames[node.depth], { 'xml:id': title }, [
    x('title', headingChildren),
  ]);
  return headingElement;
}

// Simple node to make text elements
function makeText(txt: string): Text {
  return { type: 'text', value: txt };
}

// Extracts the text from a heading in order to form the heading id
function extractText(children: PhrasingContent[]): string {
  return children
    .map((ch: PhrasingContent) => {
      if ('value' in ch) return ch.value;
      else if ('children' in ch) return ch.children;
      else return '';
    })
    .join('-');
}

function convertNode(node: RootContent): ElementContent | undefined {
  switch (node.type) {
    case 'text':
      return makeText(node.value);
    case 'heading':
    // Only cases of headings 4-6 make it here. Handle as paragraphs
    // falls through
    case 'paragraph':
      return x('p', node.children.map(convertNode));
    case 'emphasis':
      return x('em', node.children.map(convertNode));
    case 'strong':
      return x('term', node.children.map(convertNode));
    case 'blockquote':
      return x('blockquote', node.children.map(convertNode));
    case 'thematicBreak':
    // TODO: It feels like we should handle thematic breaks somehow differently
    // but for now just falling back to break
    // falls through
    case 'break':
      return x('p', [makeText('&nbsp;')]);
    case 'code':
      // TODO might have to escape xml
      return x(
        'program',
        { language: node.lang ?? '$' },
        x('input', makeText(node.value)),
      );
    case 'delete':
      return x('delete', node.children.map(convertNode));
    case 'inlineCode':
      return x('c', [makeText(node.value)]);
    case 'list':
      // TODO: Handle starting number other than 1?
      return x('p', [
        x(node.ordered ? 'ol' : 'ul', node.children.map(convertNode)),
      ]);
    case 'listItem':
      return x('li', node.children.map(convertNode));
    case 'link':
      return x('url', { href: node.url }, node.children.map(convertNode));
    case 'image':
      return x('url', { source: node.url }, [node.alt ?? node.title ?? '']);
    case 'definition':
    case 'footnoteDefinition':
    case 'footnoteReference':
    case 'linkReference':
    case 'imageReference':
      // In theory all of these definition and reference cases should be automatically
      // handle via the remark-gfm and remark-inline-links plugins and should not occur
      // for us. Need some test cases
      return;
    case 'html':
      // TODO: Handle ??
      return;
    case 'yaml':
      // TODO: Maybe handle ?? Metadata?
      return;
    case 'table':
    case 'tableCell':
    case 'tableRow':
      // TODO: Handle tables
      return;
    default:
  }
}
