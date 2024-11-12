import { Heading, Text } from 'mdast';
import { Element, ElementContent } from 'xast';
export declare const headingNames: string[];
export declare const headingPrefixes: string[];
export declare function makeText(txt: string): Text;
export declare function makeQuote(txt: string, single?: boolean): Element;
export declare function extractText(children: ElementContent[]): string;
export declare function makeHeading(depth: Heading['depth'], children: ElementContent[]): Element;
