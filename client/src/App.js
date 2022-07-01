import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyledTodoInput, StyledTodoList } from "ui";

function App() {
  const [todos, setTodos] = useState([]);
  const getTodos = async () => {
    const { data } = await axios(`${process.env.REACT_APP_URL}/api/todos`);
    setTodos(data);
  };

  const addTodo = async (todo) => {
    const { data } = await axios.post(
      `${process.env.REACT_APP_URL}/api/todos/newTodo`,
      {
        title: todo,
      }
    );
    setTodos([...todos, data]);
  };

  const filterTodos = (id) => {
    setTodos([...todos.filter(({ _id }) => _id !== id)]);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <h1>Notes App</h1>
      <StyledTodoInput addTodo={addTodo} />
      {todos.length > 0 && (
        <StyledTodoList filterTodos={filterTodos} todos={todos} />
      )}
    </div>
  );
}

export default App;
