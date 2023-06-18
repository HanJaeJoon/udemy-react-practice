import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023');
  const onChangeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    props.onChangeFilter(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        value={filteredYear}
        onChangeFilter={onChangeFilterHandler}
      />
      {props.items.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
            display={item.display}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
