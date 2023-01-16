import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/counter';
import classes from './Counter.module.css';



const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const dispatch = useDispatch();
  const showCounter = useSelector(state => state.counter.showCounter)
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  }

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div >
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
