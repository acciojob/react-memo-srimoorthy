import React, { useMemo } from 'react';

function expensiveCalculation(count) {
  for (let i = 0; i < 1000000000; i++) {} // Mock heavy calculation
  return count;
}

const UseMemo = ({ count, setCount, addTodo, todos }) => {
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h2>My todos</h2>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}

      <hr />

      <h2>Expensive Calculation</h2>
      <div>{calculation}</div>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div>Count: {count}</div>
    </div>
  );
};

export default UseMemo;

