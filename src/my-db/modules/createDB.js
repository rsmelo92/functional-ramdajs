import * as R from 'ramda';

function createDB(log) {
  const {identity} = R
  R.map(identity, [1, 2, 3])
  console.log({log});
}

export default createDB;
