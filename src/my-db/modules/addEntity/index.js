import {
  prop, append, find, propEq, evolve, indexOf, update, merge, objOf,
} from 'ramda';

function addEntity(db, tableId, entityId, entityBody) {
  const tables = prop('tables', db);
  const currentTable = find(propEq('tableId', tableId), tables);

  const newEntity = merge(
    objOf('entityId', entityId),
    entityBody,
  );

  const tableTransformations = objOf(
    'entities',
    append(newEntity),
  );
  const transformedTable = evolve(tableTransformations, currentTable);

  const tableIndex = indexOf(currentTable, tables);
  const newDBTransformations = objOf(
    'tables',
    update(tableIndex, transformedTable),
  );

  return evolve(newDBTransformations, db);
}

export default addEntity;
