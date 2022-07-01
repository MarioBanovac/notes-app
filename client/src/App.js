import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyledTodoInput, StyledTodoList } from "ui";

const url = "http://localhost:3000";

function App() {
  const [todos, setTodos] = useState([]);
  const getTodos = async () => {
    const { data } = await axios(`${url}/api/todos`);
    setTodos(data);
  };

  const addTodo = async (todo) => {
    const { data } = await axios.post(`${url}/api/todos/newTodo`, {
      title: todo,
    });
    setTodos([...todos, data]);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <h1>Notes App</h1>
      <StyledTodoInput addTodo={addTodo} />
      {todos.length >0 && <StyledTodoList todos={todos} />}
    </div>
  );
}

export default App;
