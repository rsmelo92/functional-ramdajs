import createDB from '..';

describe('createDB', () => {
  test('should create database properly', () => {
    const db = createDB();

    expect(db).toBeDefined();
    expect(db).toMatchSnapshot();
  });
});
