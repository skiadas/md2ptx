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
  test('titles get lowercased when becoming ids', () => {
    expect(markdownToPretext('# Title Here')).toBe(
      '<chapter xml:id="ch-title-here">\n<title>Title Here</title>\n</chapter>\n',
    );
  });
  test('single quotes stay normal', () => {
    expect(markdownToPretext("I can't have that.")).toBe(
      "<p>I can't have that.</p>",
    );
  });
  test('quoted strings should be wrapped in <q> instead', () => {
    expect(markdownToPretext('a "quote" here')).toBe(
      '<p>a <q>quote</q> here</p>',
    );
  });
  test('single quoted strings should be wrapped in <sq> instead', () => {
    expect(markdownToPretext("a 'quoted string' here")).toBe(
      '<p>a <sq>quoted string</sq> here</p>',
    );
  });
  test('lists are wrapped in their own paragraph by default', () => {
    expect(
      markdownToPretext('a paragraph then a list.\n\n1. item 1\n2. item 2'),
    ).toBe(
      '<p>a paragraph then a list.</p>\n\n\n\n<p><ol>\n<li>item 1</li>\n<li>item 2</li>\n</ol></p>',
    );
  });
  test('lists merge in prior paragraph if set in option', () => {
    expect(
      markdownToPretext('a paragraph then a list.\n\n1. item 1\n2. item 2', {
        mergeListToParagraph: true,
      }),
    ).toBe(
      '<p>a paragraph then a list.\n\n\n\n<ol>\n<li>item 1</li>\n<li>item 2</li>\n</ol></p>',
    );
  });
});
