import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function TodoList(props) {
  const { className, todos, filterTodos } = props;

  const handleClick = async (id) => {
    const deletedTodo = await axios.delete(
      `${process.env.REACT_APP_URL}/api/todos/${id}`
    );
    filterTodos(id);
  };

  return (
    <div className={className}>
      <h2>Old notes</h2>
      <ul>
        {todos.map(({ title, _id }) => (
          <li key={_id}>
            <div>{title}</div>
            <button onClick={() => handleClick(_id)}>
              <FontAwesomeIcon icon={faX} size={"2xl"} fixedWidth />
            </button>
            <button>
              <FontAwesomeIcon icon={faCheck} size={"2xl"} fixedWidth />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
