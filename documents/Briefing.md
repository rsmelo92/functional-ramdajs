# Coding Challenge: myDB

## Briefing

You were tasked with the creation of a proof of concept for myDB, a brand new javascript library which enables the creation of temporary databases during runtime. Your final delivery should consist of a basic version of the library and a demo App that uses it to display a visual representation of one such database.

## What You Should Expect

This challenge is meant to test your ability to understand, design, and manipulate scalable data-structures and to use them to power web frontend applications.

Expect to deal with concepts such as:

- Data Normalization and Denormalization;
- Recursion;
- Reactive User Interfaces;
- Immutability.

## What We Expect

Your solution should be maintainable, extensible, and production quality. Hence, we expect:

- Clean and concise code;
- Adoption of Functional Programming patterns – feel free to use libraries that facilitate functional operations;
- Semantic use of your chosen language;
- Accurate implementation of provided graphical references – feel free to use frameworks, but avoid UI component libraries such as Material UI and Bootstrap;
- Quality unit tests – for the library;
- Documentation;
- A ReadMe file containing comprehensive instructions on how to setup, run and test your code.

Since both library and demo apps are meant for a web environment, they may be written in plain JavaScript or any programming language that compiles down to JavaScript – eg.: TypeScript, ELM, ClojureScript, and Reason. You are allowed to use any of the features supported by the most recent versions of Google Chrome and Mozilla Firefox.

## What We don't Expect

A full-fledged implementation of a persistent database, powered by the indexedDB, localStorage, filesystem or analogous tools. 

## Library Specification

myDB is a library that allows client applications to create and manipulate in-memory databases.

_The Library should be able to:_

- Create databases.
- Add new tables to a database.
- Add new entities to tables.
  - An entity attribute can either be a Value (string, boolean or scalar) or a Reference to another attribute.
  - A Reference should be described with a triplet following the format: `[ tableId entityId attributeId ]`.
- Resolve the value of a given reference.
- Generate a normalized representation of the state of a database.
- Generate a denormalized representation of the state of a database.

_The library should expose at least the following functions:_

### createDB

Creates and returns a new myDB database.

| Inputs | Outputs          |
| ------ | ---------------- |
| None   | database: object |

Example:

```javascript
createDB(); // => new myDB database
```

### addTable

Given a database and a tableId, creates a new table with the specified tableId and adds it to the database. Returns the updated database.

| Inputs           | Outputs          |
| ---------------- | ---------------- |
| database: object | database: object |
| tableId: string  |                  |

Example:

```javascript
addTable(db, 't'); // => db with a table of id t
```

### addEntity

Given a database, tableId and entityBody, creates a new entity with the provided entityBody and adds it to the specified table of the database, under a unique entityId. Returns the modified database.

Inputs:
database: object
tableId: string
entityId: string
entityBody: {string: any}

| Inputs             | Outputs          |
| ------------------ | ---------------- |
| database: object   | database: object |
| tableId: string    |                  |
| entityId: string   |                  |
| entityBody: object |                  |

Example:

```javascript
addEntity(db, 't', 'i', { attrId: 'attrValue' }); // => db with new entity of id "i" and body {attrId: "attrValue"} added to table "t"
```

### dump

Generates a representation of the state of a given database.

| Inputs           | Outputs          |
| ---------------- | ---------------- |
| database: object | database: object |

Example:

```javascript
dump(db); // => {t: {e1: {k: 'v'}, {e2: {refToK: ['t', 'e1', 'k']}}}}
```

### denormalize

Generates a denormalized representation of the state of a given database.

| Inputs           | Outputs          |
| ---------------- | ---------------- |
| database: object | database: object |

Example:

```javascript
denormalize(db); // => {t: {e1: {k: 'v'}, {e2: {refToK: 'v'}}}}
```

## Frontend Application

Using myDB, implement a web app that displays an up-to-date representation of the state of a given database through a GUI.

Since this is just a demonstration app, we don't expect either unit or e2e tests. Don't worry about animations or responsive behaviors, but try to follow the provided layout to the best of your abilities.

<aside class="notice">
Also, we highly recommend creating your demo app folder structure inside the same source directory as the Library. Although not very true to life, this setup will allow your app to directly reference builds of the Library and greatly facilitate its development.
</aside>

Example:

```

  .
  ├── src
  │   ├── my-db
  │   │   └── ...
  │   └── demo-app
  │       └── ...
  │
  ├── README.md
  └── ...

```

### Initial State

The initial state of your app should consist of a sample database. Use your library to create, populate and output a database containing the following tables and entities:

_Customers Table_

| Entity ID | Birthday   | CPF            | e-mail                    | Name                      |
| --------- | ---------- | -------------- | ------------------------- | ------------------------- |
| 0         | 15/12/1987 | 234.528.218-70 | joao.silva@email.com      | João da Silva e Silva     |
| 1         | 18/01/1962 | 682.245.830-22 | maria.goncalves@email.com | Maria Gonçalves Oliveira  |
| 2         | 20/03/1989 | 207.772.923-16 | janaina.araujo@email.com  | Janaina Araújo dos Santos |

_Account Table_

| Entity ID | Balance  | CPF                                             | Status                 |
| --------- | -------- | ----------------------------------------------- | ---------------------- |
| 0         | 633400   | <Reference to Customers Table - Entity 2 - CPF> | ACCOUNT_STATUS_ACTIVE  |
| 1         | -2357000 | <Reference to Customers Table - Entity 0 - CPF> | ACCOUNT_STATUS_BLOCKED |

You can assume, for the purposes of this challenge, that all entities in a table always have the same attributes.

### Layout

The layout for the app's GUI can be found in the `Hiring Challenge - Web Application Engineer - App Layout.png` file.

## Delivery

You should submit your solution to us as a compressed file containing a directory with at least the source code and a ReadMe file. Please make sure not to include unnecessary files such as compiled binaries, third party dependencies, etc;

Other engineers must be able to build your library and build/run you demo app by following the instructions in your Readme file;

Do not upload your solution to public repositories such as GitHub and BitBucket;

Please, keep your test anonymous. This means your submission should contain no Person Identifying Information (PII), such as name, e-mail or links to personal sites or social media pages. Be sure to check your source code, tests and configuration files for PIIs before submitting your solution.

Common sources of PII are:

- Version control author information;
- Automatic comments created by your development environment.

Submissions that fail to adder to the aforementioned rules MAY BE DISQUALIFIED.

Good luck!
