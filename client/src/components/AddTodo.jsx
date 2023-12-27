import React from "react";

const AddTodo = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="write your todo here" />
        <button>Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
