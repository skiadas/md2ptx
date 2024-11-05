"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.markdownToPretext = markdownToPretext;
const md_to_ptx_1 = require("./md-to-ptx");
function markdownToPretext(text, options) {
    return (0, md_to_ptx_1.convertMarkdown)(text, options);
}
