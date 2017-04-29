# React / Redux / Typescript / Webpack2 - App Starter
## _Powered by Webpack2 optimized for performance_

## Features:
- Webpack2 - both dev & production workflow scripts  
- separate app (source code) and vendor bundle
- both `ts-loader` & `awesome-typescript-loader` for performance comparison  
- React Hot Loader 3  
- Webpack Dashboard  

---

## Installation

```
// Clone repo
git clone https://github.com/piotrwitek/react-redux-typescript-webpack-starter

// Install dependencies
npm install
or
yarn

// Run development server with react hot-reload
npm run dev
or
yarn dev
```

---

## CLI Commands

#### - Development

`npm run dev` or `yarn dev` - start local dev server with hot-reload

#### - Type checking

`npm run tsc` - entire project type-check

`npm run tsc:watch` - fast incremental type-checking in watch mode

#### - Production Bundling (`dist/` folder)

~~`npm run prod` - start local dev server in `dist/` folder running production bundle~~

`npm run clean` - clean dist

`npm run build` - build dist bundle

#### - Utility & Git Hooks

`npm run re` - reinstall all dependencies (usefull when switching branch)

`npm run lint` - run linter (tslint)

`npm run test` - run tests with jest runner

`npm run test:update` - update jest snapshots

`npm run precommit` - pre commit git hook - linter

`npm run prepush` - pre push git hook - linter, tests and check types

#### - Deployment

`npm run deploy` - commit and push all changes found in `/dist` folder to "gh-pages" branch

---

## The MIT License (MIT)

Copyright (c) 2016 Piotr Witek <piotrek.witek@gmail.com> (http://piotrwitek.github.io/)
