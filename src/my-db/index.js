import createDB from './modules/createDB';
import addTable from './modules/addTable';
import addEntity from './modules/addEntity';
import dump from './modules/dump';
import denormalize from './modules/denormalize';

const DB = createDB();

dump(DB);
denormalize(DB);

// export createDB;
