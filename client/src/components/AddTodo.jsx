import React, { useState } from "react";

const AddTodo = () => {
  const [input, setInput] = useState();
  console.log(input);
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="max-w-xs mx-auto mt-6">
      <form onSubmit={submitHandler} className="flex items-center">
        <input
          type="text"
          className="border border-gray-300 p-2 w-2/3"
          placeholder="Add Todo"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          type="submit"
          className="ml-2 bg-blue-500 text-white p-2 rounded"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
