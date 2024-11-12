# md2ptx

![Branches](./badges/coverage-branches.svg)
![Functions](./badges/coverage-functions.svg)
![Lines](./badges/coverage-lines.svg)
![Statements](./badges/coverage-statements.svg)
![Coverage total](./badges/coverage-total.svg)

A Typescript library for converting [Markdown](https://commonmark.org/) code to [PreTeXt](https://pretextbook.org/). Uses [marked.js](https://marked.js.org/).

Usage:
```typescript
import { convertToPretext } from 'markdownToPretext';

const ptxString = convertToPretext("markdown string");
```
