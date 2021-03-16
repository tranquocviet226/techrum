import React from "react";
import "../styles/css/Counter.css";

interface Props {
  readonly increment: () => void;
  readonly decrement: () => void;
  readonly count: number;
}

const Counter = ({ increment, decrement, count }: Props) => {
  return (
    <div className="counter-container">
      <button onClick={decrement}>-</button>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
