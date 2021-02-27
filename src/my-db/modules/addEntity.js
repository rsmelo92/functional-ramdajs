import {
  prop, append, find, propEq, evolve, indexOf, update, merge, objOf,
} from 'ramda';

function addEntity(db, tableId, entityId, entityBody) {
  const newEntity = merge(
    objOf('entityId', entityId),
    entityBody,
  );

  const tables = prop('tables', db);
  const currentTable = find(
    propEq('tableId', tableId),
    tables,
  );

  const index = indexOf(currentTable, tables);
  const transformedTable = evolve(
    objOf(
      'entities',
      append(newEntity),
    ), currentTable,
  );

  const newDB = evolve(
    objOf(
      'tables',
      update(index, transformedTable),
    ),
    db,
  );

  return newDB;
}

export default addEntity;
