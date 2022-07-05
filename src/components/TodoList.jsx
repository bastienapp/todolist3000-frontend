import axios from "axios";
import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/todos`)
      .then((response) => response.data)
      .then((data) => setTodos(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="TodoList">
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
