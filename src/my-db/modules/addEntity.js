import {
  toPairs, prepend, filter, append, indexOf, update,
} from 'ramda';

function addEntity(db, tableId, entityId, entityBody) {
  const normalizedEntityBody = toPairs(entityBody);
  const newEntity = prepend(['entityId', entityId], normalizedEntityBody);
  const isCurrentTable = (item) => item[0][1] === tableId;
  const currentTable = filter(isCurrentTable, db);
  const appendedEntities = append(newEntity, currentTable[0][2][1]);

  const updatedTable = update(2, ['entities', appendedEntities], currentTable[0]);
  const indexToUpdate = indexOf(currentTable[0], db);

  const updatedDb = update(indexToUpdate, updatedTable, db);
  return updatedDb;
}

export default addEntity;
