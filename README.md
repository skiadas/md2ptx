# md2ptx

![Branches](https://github.com/skiadas/md2ptx/blob/badges/badges/coverage-branches.svg)
![Functions](https://github.com/skiadas/md2ptx/blob/badges/badges/coverage-functions.svg)
![Lines](https://github.com/skiadas/md2ptx/blob/badges/badges/coverage-lines.svg)
![Statements](https://github.com/skiadas/md2ptx/blob/badges/badges/coverage-statements.svg)
![Coverage total](https://github.com/skiadas/md2ptx/blob/badges/badges/coverage-total.svg)

A Typescript library for converting [Markdown](https://commonmark.org/) code to [PreTeXt](https://pretextbook.org/). Uses [marked.js](https://marked.js.org/).

Usage:
```typescript
import { convertToPretext } from 'markdownToPretext';

const ptxString = convertToPretext("markdown string");
```
