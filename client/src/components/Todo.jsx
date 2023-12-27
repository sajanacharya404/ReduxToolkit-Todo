import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTimes, FaEdit } from "react-icons/fa";
import { removeTodo } from "../slices/todoSlice";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };
  const handleUpdate = () => {};

  return (
    <div className="max-w-xs mx-auto mt-6">
      {todos.map((todo) => (
        <div key={todo.id} className="flex items-center border-b py-2">
          <span className="flex-grow">{todo.mytodo}</span>
          <button
            className="mx-2 text-red-500"
            onClick={() => handleDelete(todo.id)}
          >
            <FaTimes />
          </button>
          <button
            className="text-blue-500"
            onClick={() => handleUpdate(todo.id)}
          >
            <FaEdit />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
