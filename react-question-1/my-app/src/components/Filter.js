const Filter = (props) => {
  const onFilterChange = (event) => {
    props.onFilterChange(event.target.value);
  };

  return (
    <select onChange={onFilterChange} value={props.filter}>
      <option value="all">
        all
      </option>
      <option value="odd">
        odd
      </option>
      <option value="even">
        even
      </option>
    </select>
  );
};

export default Filter;
