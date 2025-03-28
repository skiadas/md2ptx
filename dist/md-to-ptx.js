import remarkParse from 'remark-parse';
import remarkInlineLinks from 'remark-inline-links';
import remarkGfm from 'remark-gfm';
import { unified } from 'unified';
import { x } from 'xastscript';
import { xmlStringify } from './xml-stringify';
import { makeHeading, makeText } from './utils';
import { replaceQuotes } from './replace-quotes';
import { fixLists } from './fix-lists';
export function convertMarkdown(text, options) {
    return (unified()
        .use(remarkParse)
        .use(remarkInlineLinks)
        .use(remarkGfm)
        .use(mdToPtx)
        .use(fixLists, options)
        .use(replaceQuotes)
        // @ts-expect-error until the types cooperate
        .use(xmlStringify, {})
        .processSync(text)
        .toString());
}
function mdToPtx() {
    return (tree) => makePtx(tree);
}
// TODO consider using  https://unifiedjs.com/explore/package/unist-util-is/
function makePtx(mdTree) {
    // We technically shouldn't have to create this oneEl, but the types are not cooperating
    const rootEl = x('root');
    const root = x(null, [rootEl]);
    const ptxStack = [[0, rootEl]];
    let ptxCurr = [];
    function closeHeadingsNoHigherThan(depth) {
        while (ptxStack.length > 0) {
            const [nextDepth, nextHeading] = ptxStack.pop();
            // Any current contents belong to the last heading
            nextHeading.children.push(...ptxCurr.filter((x) => x));
            if (nextDepth >= depth) {
                // If this heading is to end, set it to be absorbed into its parent
                ptxCurr = [nextHeading];
            }
            else {
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
            const headingElement = makeHeading(node.depth, node.children.map(convertNode).filter((x) => typeof x != 'undefined'));
            ptxStack.push([node.depth, headingElement]);
        }
        else {
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
function convertNode(node) {
    var _a, _b, _c;
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
            return x('program', { language: (_a = node.lang) !== null && _a !== void 0 ? _a : '$' }, x('input', makeText(node.value)));
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
            return x('url', { source: node.url }, [(_c = (_b = node.alt) !== null && _b !== void 0 ? _b : node.title) !== null && _c !== void 0 ? _c : '']);
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
