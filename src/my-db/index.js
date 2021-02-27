import createDB from './modules/createDB';
import addTable from './modules/addTable';
import addEntity from './modules/addEntity';

const DB = createDB();
const withNewTable = addTable(DB, 'table-2');

const newEntity = {
  birthday: '14/02/1992',
  cpf: '756.645.432-23',
  email: 'aldebrando.antunes@email.com',
  name: 'Aldebrando Antunes Saraiva',
};
const withNewEntity = addEntity(withNewTable, 'table-2', 'entity-0', newEntity);

console.log({ withNewEntity });

const withAnotherEntity = addEntity(withNewEntity, 'table-2', 'entity-1', {
  birthday: '24/04/1994',
  cpf: '987.674.542-43',
  email: 'carla-brandao@email.com',
  name: 'Carla Brandao Soares',
});

console.log(withAnotherEntity);

// export { createDB };
