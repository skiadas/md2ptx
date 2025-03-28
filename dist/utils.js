import { x } from 'xastscript';
export const headingNames = ['', 'chapter', 'section', 'subsection'];
export const headingPrefixes = ['', 'ch', 'sec', 'sub'];
// Simple node to make text elements
export function makeText(txt) {
    return { type: 'text', value: txt };
}
export function makeQuote(txt, single = false) {
    return x(single ? 'sq' : 'q', [makeText(txt)]);
}
// Extracts the text from a heading in order to form the heading id
export function extractText(children) {
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
export // Creates a heading element.
 function makeHeading(depth, children) {
    const title = `${headingPrefixes[depth]}-${extractText(children).replace(/\W+/g, '-').toLowerCase()}`;
    const headingElement = x(headingNames[depth], { 'xml:id': title }, [
        x('title', children),
    ]);
    return headingElement;
}
