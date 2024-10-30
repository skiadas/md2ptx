import { markdownToPretext } from '../src/index';

describe('Markdown element behaviors', () => {
  test('Simple text becomes a paragraph', () => {
    expect(markdownToPretext('Hello there!')).toBe('<p>Hello there!</p>');
  });
  test('reference links get transformed with their definitions', () => {
    expect(
      markdownToPretext(
        '[Message here][1]\n\n[1]: https://www.example.org',
      ).trim(),
    ).toBe('<p><url href="https://www.example.org">Message here</url></p>');
  });
  test('escaped characters are unescaped', () => {
    expect(markdownToPretext('\\.')).toBe('<p>.</p>');
  });
});
