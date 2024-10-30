"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.markdownToPretext = markdownToPretext;
// module
const marked_1 = require("marked");
const headingNames = ['', 'chapter', 'section', 'subsection'];
const headingPrefixes = ['', 'ch', 'sec', 'sub'];
const headingStack = [];
function closeHeadingsUpTo(depth) {
    var _a, _b;
    let result = '';
    while (headingStack.length > 0) {
        const nextHeading = headingStack.pop();
        if (((_a = nextHeading.depth) !== null && _a !== void 0 ? _a : 0) >= depth) {
            result += `</${headingNames[(_b = nextHeading.depth) !== null && _b !== void 0 ? _b : 0]}>\n`;
        }
        else {
            headingStack.push(nextHeading);
            break;
        }
    }
    return result;
}
function pushHeading(token) {
    headingStack.push(token);
}
function escapeXml(unsafe) {
    return unsafe.replace(/[<>&'"]/g, function (c) {
        switch (c) {
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '&':
                return '&amp;';
            default:
                return c;
            // case "'":
            //   return "&apos;";
            // case '"':
            //   return "&quot;";
        }
    });
}
function wrap(tag, tokens, join, attributes) {
    join !== null && join !== void 0 ? join : (join = '\n');
    attributes !== null && attributes !== void 0 ? attributes : (attributes = new Map());
    const attrPart = Array.from(attributes.entries())
        .map(([attr, value]) => ` ${attr}="${value}"`)
        .join('');
    const contents = (tokens !== null && tokens !== void 0 ? tokens : []).map(processToken).join(join);
    return `<${tag}${attrPart}>${join}${contents}${join}</${tag}>`;
}
function processHeading(token) {
    const preamble = closeHeadingsUpTo(token.depth);
    pushHeading(token);
    const title = token.tokens.map(processToken).join('');
    const id = title.replace(/\W+/g, '-');
    return `${preamble}<${headingNames[token.depth]} xml:id="${headingPrefixes[token.depth]}-${id}">\n<title>${title}</title>\n`;
}
function processCodeblock(token) {
    return `<program language="${token.lang || '$'}">\n<input>\n${escapeXml(token.text)}\n</input></program>`;
}
function processToken(token) {
    switch (token.type) {
        case 'space':
            return token.raw;
        case 'heading':
            return processHeading(token);
        case 'code':
            return processCodeblock(token);
        case 'table':
            return 'TODO tables';
        case 'hr':
            return 'TODO hr';
        case 'blockquote':
            return wrap('blockquote', token.tokens);
        case 'list':
            return wrap(token.ordered ? 'ol' : 'ul', token.items);
        case 'list_item':
            return wrap('li', token.tokens, '');
        case 'paragraph':
            return wrap('p', token.tokens, '');
        case 'html':
            return token.raw;
        case 'text':
            if ('tokens' in token) {
                return token.tokens.map(processToken).join('');
            }
            else {
                return escapeXml(token.text);
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
            console.log(token);
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
function convertMarkdown(md) {
    const tokens = marked_1.marked.lexer(md);
    return tokens.map(processToken).join('\n') + closeHeadingsUpTo(0);
    // return JSON.stringify(tokens);
}
function markdownToPretext(text) {
    const result = convertMarkdown(text);
    console.log(result);
    return result;
}
