import { convertMarkdown } from './md-to-ptx';
export function markdownToPretext(text, options) {
    return convertMarkdown(text, options);
}
