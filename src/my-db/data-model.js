const data = {
  database: 'bank data',
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
        {
          entityId: 'entity-1',
          birthday: '18/01/1962',
          cpf: '682.245.830-22',
          email: 'maria.goncalves@email.com',
          name: 'Maria Gonçalves Oliveira',
        },
        {
          entityId: 'entity-2',
          birthday: '20/03/1989',
          cpf: '207.772.923-16',
          email: 'janaina.araujo@email.com',
          name: 'Janaina Araújo dos Santos',
        },
      ],
    },
    {
      tableId: 'table-1',
      tableName: 'Account',
      entities: [
        {
          entityId: 'entity-0',
          balance: '123123123',
          cpf: ['table-0', 'entity-2', 'cpf'],
          status: 'ACCOUNT_STATUS_ACTIVE',
        },
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

export { data };
