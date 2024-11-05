import { Heading, Text } from 'mdast';
import { Element, ElementContent } from 'xast';
import { x } from 'xastscript';

export const headingNames = ['', 'chapter', 'section', 'subsection'];
export const headingPrefixes = ['', 'ch', 'sec', 'sub'];

// Simple node to make text elements
export function makeText(txt: string): Text {
  return { type: 'text', value: txt };
}

// Extracts the text from a heading in order to form the heading id
export function extractText(children: ElementContent[]): string {
  return children
    .map((ch: ElementContent) => {
      if ('value' in ch) return ch.value;
      else if ('children' in ch) return extractText(ch.children);
      else return '';
    })
    .join('-');
}

export // Creates a heading element.
function makeHeading(
  depth: Heading['depth'],
  children: ElementContent[],
): Element {
  const title = `${headingPrefixes[depth]}-${extractText(children).replace(/\W+/g, '-').toLowerCase()}`;
  const headingElement = x(headingNames[depth], { 'xml:id': title }, [
    x('title', children),
  ]);
  return headingElement;
}
