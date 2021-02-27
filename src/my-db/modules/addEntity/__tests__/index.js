import {addEntity} from './';

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
      entities: [],
    }
  ]
};

describe('addEntity', () => {
  test('should add new entities to tables properly', () => {
    const newEntity = {
      birthday: '14/02/1992',
      cpf: '756.645.432-23',
      email: 'aldebrando.antunes@email.com',
      name: 'Aldebrando Antunes Saraiva',
    };
  
    const newDBWithEntity = addEntity(mockDB, 'table-0', 'entity-1', newEntity);
  
    expect(newDBWithEntity.tables[0].entities).toHaveLength(2);
    expect(newDBWithEntity.tables[0].entities).toContainEqual({
      entityId: 'entity-1',
      ...newEntity
    });
    expect(newDBWithEntity.tables).toMatchSnapshot();

    const anotherEntity = {
      balance: '141566',
      cpf: ['table-0', 'entity-1', 'cpf'],
      status: 'ACCOUNT_STATUS_ACTIVE',
    };
    const { tables } = addEntity(newDBWithEntity, 'table-1', 'entity-0', anotherEntity);

    expect(tables[0].entities).toHaveLength(2);
    expect(tables[1].entities).toContainEqual({
      entityId: 'entity-0',
      ...anotherEntity
    });
    expect(tables).toMatchSnapshot();
  });
});
