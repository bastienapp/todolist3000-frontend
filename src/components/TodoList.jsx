import React from "react";
import TodoItem from "./TodoItem";

const todos = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    done: false,
  },
  {
    id: 2,
    title: "Nemo laboriosam earum officia aliquid repudiandae",
    done: true,
  },
  {
    id: 3,
    title:
      "Mollitia, saepe expedita a exercitationem explicabo reiciendis officia eligendi?",
    done: true,
  },
  {
    id: 4,
    title:
      "Officia, alias animi tempore ex similique incidunt provident quam at libero.",
    done: false,
  },
];

function TodoList() {
  return (
    <div className='TodoList'>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
