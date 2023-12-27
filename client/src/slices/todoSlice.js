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
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
