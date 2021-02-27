import createDB from './modules/createDB';
import addTable from './modules/addTable';
import addEntity from './modules/addEntity';
import dump from './modules/dump';

const DB = createDB();
const withNewTable = addTable(DB, 'table-2', 'New Table');

const newEntity = {
  birthday: '14/02/1992',
  cpf: '756.645.432-23',
  email: 'aldebrando.antunes@email.com',
  name: 'Aldebrando Antunes Saraiva',
};
const withNewEntity = addEntity(withNewTable, 'table-2', 'entity-0', newEntity);

const withAnotherEntity = addEntity(withNewEntity, 'table-2', 'entity-1', {
  birthday: '24/04/1994',
  cpf: '987.674.542-43',
  email: 'carla-brandao@email.com',
  name: 'Carla Brandao Soares',
});

const secondTableWithNewEntity = addEntity(withAnotherEntity, 'table-1', 'entity-2', {
  balance: '141566',
  cpf: ['table-2', 'entity-0', 'cpf'],
  status: 'ACCOUNT_STATUS_ACTIVE',
});

const secondTableWithAnotherNewEntity = addEntity(secondTableWithNewEntity, 'table-1', 'entity-3', {
  balance: '-9918833',
  cpf: ['table-2', 'entity-1', 'cpf'],
  status: 'ACCOUNT_STATUS_BLOCKED',
});

// console.log(
dump(secondTableWithAnotherNewEntity);
// );

// export createDB;
