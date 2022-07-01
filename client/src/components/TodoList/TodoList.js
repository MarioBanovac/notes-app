import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";

export default function TodoList(props) {
  const { className, todos } = props;
  return (
    <div className={className}>
      <h2>Old notes</h2>
      <ul>
        {todos.map(({ title, _id }) => (
          <li key={_id}>
            <div>{title}</div>
            <button>
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
