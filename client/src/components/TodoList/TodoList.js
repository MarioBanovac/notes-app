import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function TodoList(props) {
  const { className, todos, filterTodos, updateTodos } = props;

  const [isEditing, setIsEditing] = useState(false);
  // ovo koristimo da editiramo samo todo na koji smo kliknuli
  const [editingId, setEditingId] = useState("");
  const [value, setValue] = useState("");

  const handleDelete = async (id) => {
    await axios.delete(`${process.env.REACT_APP_URL}/api/todos/${id}`);
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
            {isEditing && editingId === _id ? (
              <input onChange={handleChange} value={value} />
            ) : (
              <div onClick={() => handleEditing(title, _id)}>{title}</div>
            )}

            <button onClick={() => handleDelete(_id)}>
              <FontAwesomeIcon icon={faX} size={"2xl"} fixedWidth />
            </button>
            <button
              onClick={() => {
                handleUpdate(_id, title);
                setIsEditing(false);
                setEditingId("");
                setValue("");
              }}
            >
              <FontAwesomeIcon icon={faCheck} size={"2xl"} fixedWidth />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
