// Redux Imports
import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Third party Imports
import { v4 as uuidv4 } from "uuid";

const initialState: TodoState[] = [
  {
    id: uuidv4(),
    title: "Appreciate task completion",
    description: "",
    completed: false,
  },
  { id: uuidv4(), title: "Reply to Pramod", description: "", completed: false },
  {
    id: uuidv4(),
    title: "Hire Pramod for the Project",
    description: "",
    completed: false,
  },
];

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoFormState>) => {
      const newTodo: TodoState = {
        id: uuidv4(),
        title: action.payload.title,
        description: action.payload.description,
        completed: false,
      };
      state.unshift(newTodo);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state = state.filter((todo) => todo.id !== action.payload);
      return state;
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;

export const getTodos = (state: RootState) => state.todos;

export default todosSlice.reducer;
