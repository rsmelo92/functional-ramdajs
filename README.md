# Challenge repo

This is a challenge

The Library should be able to:

- Create databases.
- Add new tables to a database.
- Add new entities to tables.
  - An entity attribute can either be a Value (string, boolean or scalar) or a Reference to another attribute.
  - A Reference should be described with a triplet following the format: [ tableId entityId attributeId ].
- Resolve the value of a given reference.
- Generate a normalized representation of the state of a database.
- Generate a denormalized representation of the state of a database.

The library should expose at least the following functions:

- [x] createDB
- [x] addTable
- [x] addEntity
- [x] dump
- [x] denormalize
- [x] tests
- [ ] Front end application

extras:
- [ ] Improve code using right ramda functions!!
- [ ] Add flow
- [ ] yarn workspaces
- [ ] Add more functions
- [ ] Throw errors if something is wrong on functions
