import { useState } from 'react';
import classes from './Counter.module.scss';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2 className={classes.counter}>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
