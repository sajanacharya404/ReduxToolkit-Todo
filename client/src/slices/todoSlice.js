import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, mytodo: "Hello" }],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  addTodo: (state, action) => {
    const todo = {
      id: nanoid(),
      mytodo: action.payload,
    };
    state.todos.push(todo);
  },
  removeTodo: (state, action) => {
    state.todos = state.todos.filter((todo) => todo.id !== action.payload);
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
