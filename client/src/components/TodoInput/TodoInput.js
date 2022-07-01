import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function TodoInput(props) {
  const { className, addTodo } = props;
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };

  const handleChange = ({ target: { value } }) => {
    setTodo(value);
  };

  return (
    <div className={className}>
      <h2>Add new note</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={todo}
          placeholder="Enter new item..."
        />
        <button>
          <FontAwesomeIcon icon={faPlus} size={"2xl"} fixedWidth />
        </button>
      </form>
    </div>
  );
}
