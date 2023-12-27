import React from "react";
import AddTodo from "./components/AddTodo";
import { Routes, Route } from "react-router-dom";
import UpdateTodo from "./components/UpdateTodo";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AddTodo />} />
        <Route path="/update/:id" element={<UpdateTodo />} />
      </Routes>
    </div>
  );
};

export default App;
