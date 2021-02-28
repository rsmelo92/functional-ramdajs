import denormalize from '..';

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
    {
      tableId: 'table-1',
      tableName: 'Account',
      entities: [
        {
          entityId: 'entity-1',
          balance: '-2357000',
          cpf: ['table-0', 'entity-0', 'cpf'],
          status: 'ACCOUNT_STATUS_BLOCKED',
        },
      ],
    },
  ],
};

jest.spyOn(global.console, 'dir');

describe('denormalize', () => {
  test('should denormalize database properly', () => {
    const { dir } = console;
    const denormalized = denormalize(mockDB);

    expect(dir).toHaveBeenCalledWith(denormalized, { depth: null });
    expect(typeof denormalized).toBe('object');
    expect(denormalized).toMatchSnapshot();
    expect(denormalized.tables[1].entities[0].cpf).toBe(mockDB.tables[0].entities[0].cpf);
  });
});
