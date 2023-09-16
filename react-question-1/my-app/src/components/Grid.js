const Grid = (props) => {
  const onRandomClick = () => {
    props.onRandomClick();
  };

  return (
    <div>
      {props.data.map((item) => {
        if (props.filter === 'odd' && item.id % 2 === 0) return null;
        if (props.filter === 'even' && item.id % 2 !== 0) return null;
        return (
          <div key={item.id}>
            {item.id}: {item.value}
          </div>
        );
      })}
      <input type="button" value="Random Filter" onClick={onRandomClick} />
    </div>
  );
};

export default Grid;
