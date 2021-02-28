import dump from '..';

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

jest.spyOn(global.console, 'dir');

describe('dump', () => {
  test('should dump data properly', () => {
    const { dir } = console;
    const dumped = dump(mockDB);

    expect(dir).toHaveBeenCalledWith(mockDB, { depth: null });
    expect(typeof dumped).toBe('string');
    expect(dumped).toMatchSnapshot();
  });
});
