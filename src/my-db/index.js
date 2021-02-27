import createDB from './modules/createDB';
import addTable from './modules/addTable';
import addEntity from './modules/addEntity';
import dump from './modules/dump';

// All functions working flow
const DB = createDB();
const withNewTAble = addTable(DB, 'table-2', 'New Table');

const newEntity = {
  birthday: '14/02/1992',
  cpf: '756.645.432-23',
  email: 'aldebrando.antunes@email.com',
  name: 'Aldebrando Antunes Saraiva',
};

const withNewEntity = addEntity(withNewTAble, 'table-2', 'entity-0', newEntity);
console.log(withNewEntity);

// Another tests flow
const newEntityAgain = {
  birthday: '24/04/1994',
  cpf: '543.513.543-42',
  email: 'mariano.azevedo@email.com',
  name: 'Mariano Azevedo de Palmares',
};

const withAnotherNewEntity = addEntity(withNewEntity, 'table-1', 'entity-3', newEntityAgain);

console.log(withAnotherNewEntity);

// dump flow
dump(withAnotherNewEntity);

// export { createDB };
