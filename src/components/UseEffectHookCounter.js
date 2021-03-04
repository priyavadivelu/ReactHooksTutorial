import React, { useState, useEffect } from "react";

function UseEffectHookCounter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `you clicked ${count} times`;
    console.log("use effect title update");
  }, [count]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>{count} times</button>
    </div>
  );
}

export default UseEffectHookCounter;
