import { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const initialExpenses = [
    {
      id: 'ei1',
      title: 'Tesla Stock',
      amount: 254.26,
      date: new Date(2023, 6, 14),
      display: true,
    },
    {
      id: 'ei2',
      title: 'Tesla Stock',
      amount: 251.72,
      date: new Date(2023, 6, 14),
      display: true,
    },
    {
      id: 'ei3',
      title: 'Tesla Stock',
      amount: 256.42,
      date: new Date(2023, 6, 14),
      display: true,
    },
    {
      id: 'ei4',
      title: 'Tesla Stock',
      amount: 250.98,
      date: new Date(2023, 6, 14),
      display: true,
    },
  ];

  const [expenses, setExpenses] = useState(initialExpenses);

  const onAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const onChangeFilterHandler = (selectedYear) => {
    setExpenses(
      [...expenses].map((expense) => {
        return {
          ...expense,
          display: expense.date.getFullYear().toString() === selectedYear,
        };
      })
    );
  };

  return (
    <div>
      <NewExpense onAddExpense={onAddExpense} />
      <Expenses items={expenses} onChangeFilter={onChangeFilterHandler} />
    </div>
  );
};

export default App;
