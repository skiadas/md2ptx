// Plugin that "fixes" lists by merging their paragraph element
// Into the preceding paragraph element, if one exists
import { visit } from 'unist-util-visit';
const defaults = {
    mergeListToParagraph: false,
    omitInnerParagraph: false,
};
// TODO: Implement the omitInnerParagraph part
export function fixLists(options) {
    options = Object.assign(Object.assign({}, defaults), options);
    return function (tree) {
        // We are looking for the paragraph element that contains the list
        // and is the element that will be removed in the process
        // It must have a it's immediate prior sibling being also a paragraph
        if (options.mergeListToParagraph) {
            visit(tree, 'element', function (node, index, parent) {
                if (parent == undefined || index == undefined || index == 0)
                    return;
                const previousNode = parent.children[index - 1];
                if (!isElement('p', node) || !isElement('p', previousNode))
                    return;
                if (!isElement(['ul', 'ol'], node.children[0]))
                    return;
                previousNode.children.push(...node.children);
                parent.children.splice(index, 1);
            });
        }
    };
}
function isElement(el, node) {
    if (node.type != 'element')
        return false;
    return typeof el == 'string' ? node.name == el : el.includes(node.name);
}
