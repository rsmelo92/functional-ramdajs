import {
  is, map,
  path,
  filter,
  unnest,
  compose,
} from 'ramda';

function denormalize(db) {
  const getReferences = compose(
    filter(is(Array)),
    map(path(['cpf'])),
    unnest,
    map(path(['entities'])),
    path(['tables']),
  );

  const allReferences = getReferences(db);

  console.log(allReferences);

  return db;
}

export default denormalize;
