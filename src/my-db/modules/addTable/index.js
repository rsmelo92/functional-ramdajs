import {
  prop, append, mergeLeft, objOf, mergeAll,
} from 'ramda';

function addTable(db, tableId, tableName = '') {
  const newTable = mergeAll([
    objOf('tableId', tableId),
    objOf('tableName', tableName),
    objOf('entities', []),
  ]);

  const tables = prop('tables', db);
  const newTables = append(newTable, tables);

  return mergeLeft({ tables: newTables }, db);
}

export default addTable;
