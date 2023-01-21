# sidestore-source-types

[![npm](https://img.shields.io/npm/v/sidestore-source-types?style=flat-square)](https://npmjs.com/package/sidestore-source-types)

Fully documented type defintions for [SideStore](https://sidestore.github.io)'s source format. Based on https://github.com/SideStore/SideStore-Docs/blob/main/references/sources.md.

Web docs are available at https://sidestore.github.io/sidestore-source-types.

## Usage in normal JSON

We have a JSON schema available at https://github.com/SideStore/sidestore-source-types/raw/main/schema.json.

You can use it like this for editor autocomplete and documentation:

```json
{
    "$schema": "https://github.com/SideStore/sidestore-source-types/raw/main/schema.json",
    "name": "Your Source"
}
```

## Usage in TypeScript

### Installing

NPM: `npm i -D sidestore-source-types`

Yarn: `yarn add -D sidestore-source-types`

PNPM: `pnpm i -D sidestore-source-types`

### Usage

You should be able to import the types like this:

```ts
import type { Source } from "sidestore-source-types";
```

Available imports:

-   [`Source`](https://sidestore.github.io/sidestore-source-types/interfaces/Source.html)
-   [`App`](https://sidestore.github.io/sidestore-source-types/interfaces/App.html)
-   [`News`](https://sidestore.github.io/sidestore-source-types/interfaces/News.html)
-   [`Version`](https://sidestore.github.io/sidestore-source-types/interfaces/Version.html)
-   [`Permission`, `PermissionType`](https://sidestore.github.io/sidestore-source-types/interfaces/Permission.html)

### Usage Example

See [`test/index.ts`](https://github.com/SideStore/sidestore-source-types/blob/main/test/index.ts)
