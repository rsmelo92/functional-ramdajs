import { toPairs, prepend, filter } from 'ramda';

function addEntity(db, tableId, entityId, entityBody) {
  const normalizedEntityBody = toPairs(entityBody);
  const newEntity = prepend(['entityId', entityId], normalizedEntityBody);
  console.log({ tableId });
  console.log({ newEntity });
  console.log({ db });
  const isCurrentTable = (item) => item[0][1] === tableId;
  const currentTable = filter(isCurrentTable, db);
  console.log(currentTable[0]);
  return db;
}

export default addEntity;
