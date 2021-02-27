import createDB from './modules/createDB';
import addTable from './modules/addTable';
import addEntity from './modules/addEntity';

const DB = createDB();
const withNewTAble = addTable(DB, 'table-2');

const newEntity = {
  birthday: '14/02/1992',
  cpf: '756.645.432-23',
  email: 'aldebrando.antunes@email.com',
  name: 'Aldebrando Antunes Saraiva',
};

const withNewEntity = addEntity(withNewTAble, 'table-2', 'entity-0', newEntity);

// console.log(withNewEntity);

// export { createDB };
