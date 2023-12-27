import React, { useState } from "react";
import { updateTodo } from "../slices/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const UpdateTodo = () => {
  const { id } = useParams();
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateTodo({
        id: id,
        updatedTodo: input,
      })
    );
    setInput("");
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-4 bg-white shadow-md rounded-md">
      <form onSubmit={submitHandler} className="flex items-center">
        <input
          type="text"
          className="border border-gray-300 p-2 w-2/3 focus:outline-none focus:border-blue-500 rounded-l-md"
          placeholder="Add Todo"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button
          type="submit"
          className="ml-2 bg-blue-500 text-white px-7 rounded-r-md hover:bg-blue-600 focus:outline-none"
        >
          Update Todo
        </button>
      </form>
    </div>
  );
};

export default UpdateTodo;
