"use client";

// React Imports
import React from "react";

// redux Imports
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "@/redux/todoSlice";

// UI Components Imports
import { Checkbox, IconButton } from "@mui/material";

// Icons Imports
import { MdCancel } from "react-icons/md";

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  title,
  description,
  completed,
}) => {
  const dispatch = useDispatch();

  const handleToggleTodo = () => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <li
      className={`mt-2 flex relative items-start p-2 border-2 border-solid ${
        completed ? "border-green-500 line-through opacity-50" : "border-black"
      } rounded-md`}
    >
      <Checkbox
        className="!p-0 !mr-2"
        checked={completed}
        onChange={handleToggleTodo}
      />
      <div className="flex flex-col">
        <p className="text-md font-semibold">{title}</p>
        <p className="text-sm mt-1">{description}</p>
      </div>
      <IconButton
        className="!absolute !top-0 !right-0"
        onClick={handleDeleteTodo}
      >
        <MdCancel className="text-red-500" />
      </IconButton>
    </li>
  );
};

export default TodoItem;
