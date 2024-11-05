import { Options, toXml } from 'xast-util-to-xml';
import { type Processor } from 'unified';
import { Root } from 'xast';

export function xmlStringify(
  this: Processor<undefined, undefined, undefined, Root, string>,
  options: Options,
) {
  const settings = { ...this.data('settings'), ...options };

  this.compiler = function compiler(tree: Root): string {
    return toXml(tree, settings);
  };
}
