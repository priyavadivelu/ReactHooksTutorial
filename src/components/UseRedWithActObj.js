import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { firstCounter: state.firstCounter + action.value };
    case "Decrement":
      return { firstCounter: state.firstCounter - action.value };
    case "Reset":
      return initialState;
    default:
      return state;
  }
};

function UseRedWithActObj() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h3>Count - {count.firstCounter}</h3>
      <button onClick={() => dispatch({ type: "Increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "Decrement", value: 1 })}>
        Decrement
      </button>

      <button onClick={() => dispatch({ type: "Increment", value: 5 })}>
        Increment by 5
      </button>
      <button onClick={() => dispatch({ type: "Decrement", value: 5 })}>
        Decrement by 5
      </button>

      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </div>
  );
}

export default UseRedWithActObj;
