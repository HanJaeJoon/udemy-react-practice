import Filter from './components/Filter';
import Grid from './components/Grid';
import { useState, useEffect } from 'react';

const data = [
  { id: 1, value: 'a' },
  { id: 2, value: 'b' },
  { id: 3, value: 'c' },
  { id: 4, value: 'd' },
  { id: 5, value: 'e' },
  { id: 6, value: 'f' },
  { id: 7, value: 'g' },
  { id: 8, value: 'h' },
  { id: 9, value: 'i' },
];

function App() {
  const [filter, setFilter] = useState('odd');

  return (
    <div className="App">
      <header>Question 1</header>
      <hr />
      <Filter
        filter={filter}
        onFilterChange={(option) => {
          setFilter(option);
        }}
      />
      <hr />
      <Grid
        data={data}
        filter={filter}
        onRandomClick={() => {
          const data = ['all', 'odd', 'even'].filter((item) => item !== filter);
          const randomIndex = Math.floor(Math.random() * data.length);
          setFilter(data[randomIndex]);
        }}
      />
      <hr />
    </div>
  );
}

export default App;
