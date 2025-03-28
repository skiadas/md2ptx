// Plugin that replaces quoted pairs in the produced output
// with <q> ...</q> or <sq>...</sq> as appropriate
import { visit } from 'unist-util-visit';
import { makeQuote, makeText } from './utils';
const DOUBLE_QUOTE = /(?<=^|\s)"(.*?)"/g;
const SINGLE_QUOTE = /(?<=^|\s)'(.*?)'/g;
export function replaceQuotes() {
    return function (tree) {
        // We must do two passes, to handle the case of
        // one kind of quotes nested inside another kind of quotes
        for (const regex of [DOUBLE_QUOTE, SINGLE_QUOTE]) {
            const isSingle = regex == SINGLE_QUOTE;
            visit(tree, 'text', function (node, index, parent) {
                if (index == undefined)
                    return;
                // The "parts" when splitting on matching strings.
                // Even parts are normal text, odd parts are quoted.
                const parts = node.value.split(regex);
                const xastParts = parts.map((txt, i) => i % 2 == 0 ? makeText(txt) : makeQuote(txt, isSingle));
                parent === null || parent === void 0 ? void 0 : parent.children.splice(index, 1, ...xastParts);
            });
        }
    };
}
