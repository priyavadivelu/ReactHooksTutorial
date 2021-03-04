import React, { useState } from "react";

function HooksCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementByFive = () => {
    for (var i = 0; i < 5; i++) {
      setCount((pc) => pc + 1);
    }
  };

  const decrementByFive = () => {
    for (var i = 0; i < 5; i++) {
      setCount((pc) => pc - 1);
    }
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((pc) => pc + 1)}>Increment</button>
      <button onClick={() => setCount((pc) => pc - 1)}>Decrement</button>
      <button onClick={incrementByFive}>Increment by 5</button>
      <button onClick={decrementByFive}>Decrement by 5</button>
    </div>
  );
}

export default HooksCounterTwo;
