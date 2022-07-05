import React from "react";

function TodoItem(props) {
  const { title, done } = props;
  return (
    <li>
      <p>{title}</p>
      <p>{done ? "done" : "to do"}</p>
    </li>
  );
}

export default TodoItem;
