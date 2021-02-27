import {
  T, is, cond, map, mapObjIndexed, ifElse, isEmpty, always, identity, isNil,
} from 'ramda';

function printNested(item, key) {
  const print = ifElse(
    isNil,
    () => {
      if (key) {
        console.log(key, item);
      } else {
        console.log(item);
      }
    },
    () => {},
  );

  const test = cond([
    [
      is(Array),
      map(printNested),
    ],
    [
      is(Object),
      mapObjIndexed(printNested),
    ],
  ]);

  const tested = test(item);

  return print(tested);
}

function dump(bd) {
  const final = mapObjIndexed(printNested, bd);
  console.log(final);
  return bd;
}

export default dump;
