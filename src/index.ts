// module
import { marked, Token, Tokens } from 'marked';

const headingNames = ['', 'chapter', 'section', 'subsection'];
const headingPrefixes = ['', 'ch', 'sec', 'sub'];
const headingStack: Tokens.Heading[] = [];

interface AllOptions {
  // If true, tries to merge a list to the paragraph preceding it
  // If false, keeps the list in its own paragraph
  mergeListToParagraph: boolean;
}

type Options = Partial<AllOptions>;

const defaultOptions: AllOptions = {
  mergeListToParagraph: false,
};

function closeHeadingsUpTo(depth: number): string {
  let result = '';
  while (headingStack.length > 0) {
    const nextHeading = headingStack.pop()!;
    if ((nextHeading.depth ?? 0) >= depth) {
      result += `</${headingNames[nextHeading.depth ?? 0]}>\n`;
    } else {
      headingStack.push(nextHeading);
      break;
    }
  }
  return result;
}

function pushHeading(token: Tokens.Heading) {
  headingStack.push(token);
}

function escapeXml(unsafe: string) {
  return unsafe.replace(/[<>&'"]/g, function (c: string) {
    switch (c) {
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '&':
        return '&amp;';
      default:
        return c;
    }
  });
}

function fixQuotes(s: string): string {
  return s
    .replace(/&amp;quot;/g, '"')
    .replace(/&amp;#39;/g, "'")
    .replace(/(?<=\s)"(.*)"/g, '<q>$1</q>')
    .replace(/(?<=\s)'(.*)'/g, '<sq>$1</sq>');
}

function fixLists(html: string) {
  return html.replace(/<\/p>(\s*)<p>\s*<(o|u)l>/g, '$1<$2l>');
}

function wrap(
  tag: string,
  tokens?: Token[],
  join?: string,
  attributes?: Map<string, string>,
): string {
  join ??= '\n';
  attributes ??= new Map();
  const attrPart = Array.from(attributes.entries())
    .map(([attr, value]) => ` ${attr}="${value}"`)
    .join('');
  const contents = (tokens ?? []).map(processToken).join(join);
  return `<${tag}${attrPart}>${join}${contents}${join}</${tag}>`;
}

function processHeading(token: Tokens.Heading): string {
  const preamble = closeHeadingsUpTo(token.depth);
  pushHeading(token);
  const title = token.tokens.map(processToken).join('');
  const id = title.replace(/\W+/g, '-').toLowerCase();
  return `${preamble}<${headingNames[token.depth]} xml:id="${
    headingPrefixes[token.depth]
  }-${id}">\n<title>${title}</title>\n`;
}
function processCodeblock(token: Tokens.Code): string {
  return `<program language="${token.lang || '$'}">\n<input>\n${escapeXml(
    token.text,
  )}\n</input></program>`;
}

function processToken(token: Token): string {
  switch (token.type) {
    case 'space':
      return token.raw;
    case 'heading':
      return processHeading(token as Tokens.Heading);
    case 'code':
      return processCodeblock(token as Tokens.Code);
    case 'table':
      return 'TODO tables';
    case 'hr':
      return 'TODO hr';
    case 'blockquote':
      return wrap('blockquote', token.tokens);
    case 'list':
      return '<p>' + wrap(token.ordered ? 'ol' : 'ul', token.items) + '</p>';
    case 'list_item':
      return wrap('li', token.tokens, '');
    case 'paragraph':
      return wrap('p', token.tokens, '');
    case 'html':
      return (token as Tokens.HTML).raw;
    case 'text':
      if ('tokens' in token) {
        return token.tokens!.map(processToken).join('');
      } else {
        return fixQuotes(escapeXml(token.text));
      }
    case 'codespan':
      return `<c>${token.text}</c>`;
    case 'strong':
      return wrap('term', token.tokens, '');
    case 'em':
      return wrap('em', token.tokens, '');
    case 'del':
      return wrap('delete', token.tokens, '');
    case 'link':
      // Note: we are losing the "title" that a Markdown link may have
      // As the url attribute doesn't appear to have an appropriate entry
      return wrap('url', token.tokens, '', new Map([['href', token.href]]));
    case 'image':
      // Same comment as for link applies
      // But this might be easier to add
      return wrap('image', token.text, '', new Map([['source', token.href]]));
    case 'escape':
      return token.text;
    case 'def':
      return '<This is a "def" token that should not be happening normally>';
    case 'br':
      return '<TODO unhandled case: ' + token.type + '>';
    default:
      console.log('Unknown token type: ' + token.type);
      return token.raw || 'Huh??';
  }
}

function convertMarkdown(md: string, options?: Options) {
  const allOptions = {
    ...defaultOptions,
    ...options,
  };
  const tokens = marked.lexer(md);
  let html = tokens.map(processToken).join('\n') + closeHeadingsUpTo(0);
  if (allOptions.mergeListToParagraph) {
    html = fixLists(html);
  }
  return html;
}

export function markdownToPretext(text: string, options?: Options) {
  return convertMarkdown(text, options);
}
