import { toXml } from 'xast-util-to-xml';
export function xmlStringify(options) {
    const settings = Object.assign(Object.assign({}, this.data('settings')), options);
    this.compiler = function compiler(tree) {
        return toXml(tree, settings);
    };
}
