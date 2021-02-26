import * as R from 'ramda';

function createDB(log) {
  const { identity } = R;
  R.map(identity, [1, 2, 3]);
  console.log('R.identity(1): ', R.identity(12));
  console.log({ log });
}

export default createDB;
