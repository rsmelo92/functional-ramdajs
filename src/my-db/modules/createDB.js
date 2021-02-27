import { map, pipe, path, nth, toPairs, remove, append } from 'ramda';
import { data } from '../data-model';

function createDB() {
  function formatDB(arrayTable) {
    const getEntities = pipe(
      nth(2),
      nth(1),
      map(toPairs),
    );
  
    const entities = getEntities(arrayTable);
  
    const getNewTable = pipe(
      remove(2,1),
      append(['entities', entities])
    );
  
    return getNewTable(arrayTable);
  }

  const tables = path(['tables'], data);
  const formattedTables = map(toPairs, tables);

  return map(formatDB, formattedTables);
}

export default createDB;
