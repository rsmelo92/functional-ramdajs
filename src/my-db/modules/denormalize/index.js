import {
  map, path,
  compose, find, propEq, prop,
  evolve,
  objOf, assocPath,
} from 'ramda';

function denormalize(db) {
  function query(queryArray) {
    const queryValueFromReference = compose(
      prop(queryArray[2]),
      find(propEq('entityId', queryArray[1])),
      path(['entities']),
      find(propEq('tableId', queryArray[0])),
    );
    return queryValueFromReference(path(['tables'], db));
  }
  const transformations = objOf('cpf', query);

  const accountEntities = path(['tables', 1, 'entities'], db);
  const denormalizedAccounts = map(evolve(transformations), accountEntities);
  const denormalizedDB = assocPath(['tables', 1, 'entities'], denormalizedAccounts, db);

  // eslint-disable-next-line no-console
  console.dir(denormalizedDB, { depth: null });

  return denormalizedDB;
}

export default denormalize;
