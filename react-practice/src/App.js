import Expenses from './components/Expenses';

function App() {
  const expenses = [
    {
      id: 'ei1',
      title: 'Tesla Stock',
      amount: 254.26,
      date: new Date(2023, 6, 14),
    },
    {
      id: 'ei2',
      title: 'Tesla Stock',
      amount: 251.72,
      date: new Date(2023, 6, 14),
    },
    {
      id: 'ei3',
      title: 'Tesla Stock',
      amount: 256.42,
      date: new Date(2023, 6, 14),
    },
    {
      id: 'ei4',
      title: 'Tesla Stock',
      amount: 250.98,
      date: new Date(2023, 6, 14),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
