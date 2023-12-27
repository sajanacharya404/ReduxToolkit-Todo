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
  updateTodo: (state, action) => {
    const { id, updatedTodo } = action.payload;
    const todo = state.todos.find((todo) => todo.id === id);
    if (todo) {
      Object.assign(todo, updatedTodo);
    }
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
