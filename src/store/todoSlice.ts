import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IToDoItem } from '../const/const';

type TodosState = {
  list: IToDoItem[];
}

const initialState: TodosState = {
  list: [],
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.list.push({
        id: Date.now(),
        body: action.payload,
        complete: false,
      });
    },

    toggleComplete(state, action: PayloadAction<number>) {
      const toggledTodo = state.list.find(todo => todo.id === action.payload);
      if (toggledTodo) {
        toggledTodo.complete = !toggledTodo.complete;
      }
    },

    removeTodo(state, action: PayloadAction<number>) {
      state.list = state.list.filter(todo => todo.id !== action.payload);
    }
  },
});

export const { addTodo, toggleComplete, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;