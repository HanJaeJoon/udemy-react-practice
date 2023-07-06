import classes from './Input.module.css';

const Input = (props) => {
  return (
    <div className={classes.input}>
      {/* for는 예약어라서 htmlFor 사용(class를 ClassName으로 사용하는 것처럼) */}
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;
