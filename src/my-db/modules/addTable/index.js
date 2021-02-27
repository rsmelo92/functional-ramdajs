import { prop, append, mergeLeft } from 'ramda';

function addTable(db, tableId, tableName = '') {
  const newTable = {
    tableId,
    tableName,
    entities: [],
  };
  const tables = prop('tables', db);
  const newTables = append(newTable, tables);

  return mergeLeft({ tables: newTables }, db);
}

export default addTable;
