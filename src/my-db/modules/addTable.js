import { append } from 'ramda';

function addTable(db, tableId, tableName) {
  const tableData = [
    ['tableId', tableId],
    ['tableName', tableName],
    ['entities', []],
  ];
  return append(tableData, db);
}

export default addTable;
