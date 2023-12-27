import React, { useState } from "react";
import { addTodo, removeTodo } from "../slices/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { FaTimes, FaEdit, FaPlus, FaEye, FaEyeSlash } from "react-icons/fa";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const [showTodos, setShowTodos] = useState(true);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  const toggleShowTodos = () => {
    setShowTodos(!showTodos);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={submitHandler} className="flex items-center mb-4">
        <input
          type="text"
          className="border border-gray-300 p-2 w-2/3"
          placeholder="Add Todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="ml-2 bg-blue-500 text-white p-2 rounded"
        >
          <FaPlus />
        </button>
      </form>
      <div className="w-full max-w-md">
        <button
          onClick={toggleShowTodos}
          className="mb-4 bg-green-500 text-white p-2 rounded"
        >
          {showTodos ? <FaEyeSlash /> : <FaEye />}{" "}
          {showTodos ? "Hide Todos" : "Show Todos"}
        </button>
        {console.log("Todos:", todos)}
        {showTodos && (
          <>
            {todos.map((todo) => (
              <div
                key={todo.id}
                className="flex items-center border-b py-2 justify-between"
              >
                <span className="flex-grow">{todo.mytodo}</span>
                <div className="flex">
                  <button
                    className="mx-2 text-red-500"
                    onClick={() => handleDelete(todo.id)}
                  >
                    <FaTimes />
                  </button>
                  <Link to={`/update/${todo.id}`}>
                    <button
                      className="text-blue-500"
                      onClick={() => handleUpdate(todo.id)}
                    >
                      <FaEdit />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default AddTodo;
