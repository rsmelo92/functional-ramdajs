import { toString } from 'ramda';

function dump(db) {
  // eslint-disable-next-line no-console
  console.dir(db, { depth: null });
  return toString(db);
}

export default dump;
