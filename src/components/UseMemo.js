import React, { useMemo } from 'react';

function expensiveCalculation(count) {
//   console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {} // Mock heavy calculation
  return count;
}

const UseMemo = ({ count, setCount, addTodo, todos }) => {
  // Memoized calculation
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h2>My todos</h2>
      <input type="text" value="New Todo" readOnly />
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}

      <hr />

      <div>
        Count: {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>

      <h2>Expensive Calculation</h2>
      <div>{1000000000}</div>
    </div>
  );
};

export default UseMemo;


