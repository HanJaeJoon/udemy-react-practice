import ExpenseItem from './components/ExpenseItem';

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
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
