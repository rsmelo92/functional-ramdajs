import addTable from '..';

const mockDB = {
  database: 'mock data',
  tables: [
    {
      tableId: 'table-0',
      tableName: 'Customers',
      entities: [
        {
          entityId: 'entity-0',
          birthday: '15/12/1987',
          cpf: '234.528.218-70',
          email: 'joao.silva@email.com',
          name: 'João da Silva e Silva',
        },
      ],
    },
  ],
};

describe('addTable', () => {
  test('should add new table properly', () => {
    const newDBWithTable = addTable(mockDB, 'table-1', 'New Mocked Table');

    expect(newDBWithTable.tables).toHaveLength(2);
    expect(newDBWithTable.tables).toContainEqual({
      tableId: 'table-1',
      tableName: 'New Mocked Table',
      entities: [],
    });
    expect(newDBWithTable).toMatchSnapshot();
  });

  test('should add new table properly when no name is provided', () => {
    const newDBWithTable = addTable(mockDB, 'table-1');

    expect(newDBWithTable.tables).toHaveLength(2);
    expect(newDBWithTable.tables).toContainEqual({
      tableId: 'table-1',
      tableName: '',
      entities: [],
    });
    expect(newDBWithTable).toMatchSnapshot();
  });
});
