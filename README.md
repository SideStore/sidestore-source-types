# sidestore-source-types

[![npm](https://img.shields.io/npm/v/sidestore-source-types?style=flat-square)](https://npmjs.com/package/sidestore-source-types)

Fully documented type defintions for [SideStore](https://sidestore.io)'s source format. Based on
https://github.com/SideStore/SideStore-Docs/blob/master/developers/sources/guide.md

## Installing

NPM: `npm i -D sidestore-source-types`

Yarn: `yarn add -D sidestore-source-types`

PNPM: `pnpm i -D sidestore-source-types`

## Usage

You should be able to import the types like this:

```ts
import type { Source } from "sidestore-source-types";
```

Available imports:
- [`Source`](./types/source.d.ts)
- [`App`](./types/app.d.ts)
- [`News`](./types/news.d.ts)
- [`Version`](./types/version.d.ts)
- [`Permission`, `PermissionType`](./types/permission.d.ts)

## Usage Example

See [`test/index.ts`](./test/index.ts)
