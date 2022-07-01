import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function TodoList(props) {
  const { className, todos, filterTodos, updateTodos } = props;

  const handleClick = async (id) => {
    await axios.delete(
      `${process.env.REACT_APP_URL}/api/todos/${id}`
    );
    filterTodos(id);
  };

  const handleUpdate = async (id) => {
    await axios.put(`${process.env.REACT_APP_URL}/api/todos/${id}`, {
      title: value,
    });
    updateTodos(id, value);
  };

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  const handleEditing = (title, id) => {
    setIsEditing(!isEditing);
    setEditingId(id);
    setValue(title);
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
