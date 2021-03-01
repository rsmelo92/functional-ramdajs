import React, { useState } from 'react';

import Card from './components/Card';
import Table from './components/Table';
import * as myDB from 'my-db';
import './App.css';

const { createDB, denormalize } = myDB;

const DB = createDB();

function App() {
  const [data] = useState(denormalize(DB));
  return (
    <div className="App">
      <main className="App-main">
        <Card className="App-main-card" depth={2}>
          <h1 className="App-title">My Database</h1>
          {data.tables.map((table) =>(
              <Table key={table.tableId} data={table} />
            ))}
        </Card>
      </main>
    </div>
  );
}

export default App;
