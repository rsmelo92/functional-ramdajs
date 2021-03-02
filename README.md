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

(This package is running with [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/), so you should run `yarn install` ideally inside the workspace root)

To build and set all that is needed to run the projects, make sure you are still in the root directory, then run:

```
yarn bootstrap
```

To finally start the demo-app you can run

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

This challenge should have at least:

- [x] createDB
- [x] addTable
- [x] addEntity
- [x] dump
- [x] denormalize
- [x] tests
- [x] Front end application

extras:
- [x] yarn workspaces
- [ ] Improve code using right ramda functions!!
- [ ] Fix imports and assure right tree shaking
- [ ] Add more functions
- [ ] Throw errors if something is wrong on functions
