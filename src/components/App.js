import React, { useState, useCallback } from 'react';
import UseMemo from './UseMemo';
import ReactMemo from './ReactMemo';

function App() {
  const [todos, setTodos] = useState(['New Todo']);
  const [count, setCount] = useState(0);

  const addTodo = useCallback(() => {
    setTodos((prevTodos) => [...prevTodos, 'New Todo']);
  }, []);

  return (
    <div>
      <h1>React.useMemo</h1>
      <UseMemo count={count} setCount={setCount} addTodo={addTodo} todos={todos} />

      <h1>React.memo</h1>
      <ReactMemo />
    </div>
  );
}

export default App;



