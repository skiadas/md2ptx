import { expect, test, describe } from 'vitest';

import { convertMarkdown } from '../src/md-to-ptx';

describe('Markdown element behaviors', () => {
  test('Simple text becomes a paragraph', () => {
    expect(convertMarkdown('Hello there!')).toBe('<p>Hello there!</p>');
  });
  test('Can have emphasis with stars', () => {
    expect(convertMarkdown('Hello *there* everybody!')).toBe(
      '<p>Hello <em>there</em> everybody!</p>',
    );
  });
  test('normal links work', () => {
    expect(
      convertMarkdown('[Message here](https://www.example.org)').trim(),
    ).toBe('<p><url href="https://www.example.org">Message here</url></p>');
  });
  test('reference links get transformed with their definitions', () => {
    expect(
      convertMarkdown(
        '[Message here][1]\n\n[1]: https://www.example.org',
      ).trim(),
    ).toBe('<p><url href="https://www.example.org">Message here</url></p>');
  });
  test('escaped characters are unescaped', () => {
    expect(convertMarkdown('\\.')).toBe('<p>.</p>');
  });
  test('titles get lowercased when becoming ids', () => {
    expect(convertMarkdown('# Title Here')).toBe(
      '<chapter xml:id="ch-title-here"><title>Title Here</title></chapter>',
    );
  });
  test('single quotes stay normal', () => {
    expect(convertMarkdown("I can't have that.")).toBe(
      "<p>I can't have that.</p>",
    );
  });
  test('quoted strings should be wrapped in <q> instead', () => {
    expect(convertMarkdown('a "quote" here')).toBe(
      '<p>a <q>quote</q> here</p>',
    );
  });
  test('single quoted strings should be wrapped in <sq> instead', () => {
    expect(convertMarkdown("a 'quoted string' here")).toBe(
      '<p>a <sq>quoted string</sq> here</p>',
    );
  });
  test('lists are wrapped in their own paragraph by default, and list items contents are paragraphs by default', () => {
    expect(
      convertMarkdown('a paragraph then a list.\n\n1. item 1\n2. item 2'),
    ).toBe(
      '<p>a paragraph then a list.</p><p><ol><li><p>item 1</p></li><li><p>item 2</p></li></ol></p>',
    );
  });
  test('lists merge in prior paragraph if set in option', () => {
    expect(
      convertMarkdown('a paragraph then a list.\n\n1. item 1\n2. item 2', {
        mergeListToParagraph: true,
      }),
    ).toBe(
      '<p>a paragraph then a list.<ol><li><p>item 1</p></li><li><p>item 2</p></li></ol></p>',
    );
  });
});
