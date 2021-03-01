# Challenge

This is a challenge for `Nubank's Web Application Engineer`

## Pre-requisites

- NodeJS 14
- Yarn

## Getting Started

Go to root directory and run 

```
yarn install
```

(This package is running with [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/), so you should `run yarn install` ideally inside the workspace root)

To build and set all needed to run the projects - still on the root directory - run:

```
yarn bootstrap
```

To finally run the demo-app you can run

```
yarn run:front
```

## Running lib only

Navigate to `src/my-db` and run

```
yarn install
```

After installing all dependecies you can run:

```
yarn dev
```

To check lib tests just run:
```
yarn test
```

## TODO

The library should expose at least the following functions:

- [x] createDB
- [x] addTable
- [x] addEntity
- [x] dump
- [x] denormalize
- [x] tests
- [x] Front end application

extras:
- [ ] Fix imports and assure right tree shaking
- [ ] Improve code using right ramda functions!!
- [ ] Add flow
- [ ] yarn workspaces
- [ ] Add more functions
- [ ] Throw errors if something is wrong on functions
