import React from 'react';
import Card from '../Card';
import './index.css'

function Table() {
  return (
    <Card className="Table-card">
      <table className="Table">
        <caption className="Table-title">Customers</caption>
        <thead>
          <tr>
            <th>Entity ID</th>
            <th>Birthdate</th>
            <th>CPF</th>
            <th>e-mail</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>14/02/1992</td>
            <td>123.123.123.65</td>
            <td>Janaina.Janaina@gmail.com</td>
            <td>Janaina araujo dos santos</td>
          </tr>
          <tr>
            <td>1</td>
            <td>14/02/1992</td>
            <td>123.123.123.65</td>
            <td>ahoy@gmail.com</td>
            <td>ahoym</td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
}

export default Table;
