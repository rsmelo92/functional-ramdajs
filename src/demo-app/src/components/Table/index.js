import React from 'react';
import Card from '../Card';
import Chip from '../Chip';
import './index.css'

function Table({data}) {
  console.log(data);
  const { tableName, entities } = data;
  console.log({entities});
  return (
    <Card className="Table-card">
      <table className="Table">
        <caption className="Table-title">{tableName}</caption>
        <thead>
          {tableName === 'Customers'? (
            <tr>
              <th>Entity ID</th>
              <th>Birthdate</th>
              <th>CPF</th>
              <th>e-mail</th>
              <th>Name</th>
            </tr>
          ) : 
          (
            <tr>
              <th>Entity ID</th>
              <th>Balance</th>
              <th>CPF</th>
              <th>Status</th>
            </tr>
          )
          }
        </thead>
        <tbody>
          {tableName === 'Customers' ? 
            entities.map(e => (
              <tr key={e.entityId}>
                <td>{e.entityId.split('-')[1]}</td>
                <td>{e.birthday}</td>
                <td>{e.cpf}</td>
                <td>{e.email}</td>
                <td>{e.name}</td>
              </tr>
            )) : 
            entities.map(e => (
              <tr key={e.entityId}>
                <td>{e.entityId.split('-')[1]}</td>
                <td>{e.balance}</td>
                <td>
                  <Chip>
                    {e.cpf}
                  </Chip>
                  </td>
                <td>{e.status}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </Card>
  );
}

export default Table;
