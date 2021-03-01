import Card from './components/Card';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <Card className="App-main-card" depth={2}>
          <h1 className="App-title">My Database</h1>
          <Table />
          <Table />
        </Card>
      </main>
    </div>
  );
}

export default App;
