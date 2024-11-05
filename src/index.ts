import { FixListOptions } from './fix-lists';
import { convertMarkdown } from './md-to-ptx';

export function markdownToPretext(
  text: string,
  options?: Partial<FixListOptions>,
) {
  return convertMarkdown(text, options);
}
