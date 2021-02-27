import { append } from 'ramda';

function addTable(db, tableId) {
  const tableData = [[ 'tableId', tableId ]];
  return append(tableData, db);
}

export default addTable;
