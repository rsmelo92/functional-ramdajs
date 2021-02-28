import createDB from './modules/createDB';
import addTable from './modules/addTable';
import addEntity from './modules/addEntity';
import dump from './modules/dump';
import denormalize from './modules/denormalize';

const modules = {
  createDB,
  addTable,
  addEntity,
  dump,
  denormalize,
};

export default modules;
