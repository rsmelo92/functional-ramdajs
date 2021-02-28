import createDB from './modules/createDB';
import addTable from './modules/addTable';
import addEntity from './modules/addEntity';
import dump from './modules/dump';
import denormalize from './modules/denormalize';

const DB = createDB();

denormalize(DB);

const modules = {
  createDB,
  addTable,
  addEntity,
  dump,
  denormalize,
};

export default modules;
