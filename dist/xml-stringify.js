"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlStringify = xmlStringify;
const xast_util_to_xml_1 = require("xast-util-to-xml");
function xmlStringify(options) {
    const settings = Object.assign(Object.assign({}, this.data('settings')), options);
    this.compiler = function compiler(tree) {
        return (0, xast_util_to_xml_1.toXml)(tree, settings);
    };
}
