"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.headingPrefixes = exports.headingNames = void 0;
exports.makeText = makeText;
exports.makeQuote = makeQuote;
exports.extractText = extractText;
exports.makeHeading = makeHeading;
const xastscript_1 = require("xastscript");
exports.headingNames = ['', 'chapter', 'section', 'subsection'];
exports.headingPrefixes = ['', 'ch', 'sec', 'sub'];
// Simple node to make text elements
function makeText(txt) {
    return { type: 'text', value: txt };
}
function makeQuote(txt, single = false) {
    return (0, xastscript_1.x)(single ? 'sq' : 'q', [makeText(txt)]);
}
// Extracts the text from a heading in order to form the heading id
function extractText(children) {
    return children
        .map((ch) => {
        if ('value' in ch)
            return ch.value;
        else if ('children' in ch)
            return extractText(ch.children);
        else
            return '';
    })
        .join('-');
}
function makeHeading(depth, children) {
    const title = `${exports.headingPrefixes[depth]}-${extractText(children).replace(/\W+/g, '-').toLowerCase()}`;
    const headingElement = (0, xastscript_1.x)(exports.headingNames[depth], { 'xml:id': title }, [
        (0, xastscript_1.x)('title', children),
    ]);
    return headingElement;
}
