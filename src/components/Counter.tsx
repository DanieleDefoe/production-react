import { useState } from 'react';
import './Counter.scss';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2 className="counter">{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
