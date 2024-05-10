"use client";

// React Imports
import React from "react";

// Redux Imports
import { useSelector } from "react-redux";
import { getTodos } from "@/redux/todoSlice";

// UI Components Imports
import TodoItem from "@/components/TodoItem";
import AddTodoForm from "@/components/AddToDoForm";

const HomePage: React.FC = () => {
  const todos = useSelector(getTodos);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <AddTodoForm />
      <div className="w-1/2 flex flex-col p-6">
        <h1 className="font-semibold text-2xl text-start mt-4">Todo List</h1>
        {todos.length > 0 ? (
          <>
            <ul className="mt-2 pr-6 overflow-y-scroll">
              {todos
                .slice()
                .sort((a, b) =>
                  a.completed === b.completed ? 0 : a.completed ? 1 : -1
                )
                .map((todo) => (
                  <TodoItem
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    description={todo.description}
                    completed={todo.completed}
                  />
                ))}
            </ul>
          </>
        ) : (
          <p className="mt-2 text-lg">
            No todos to show. Please Try adding one.
          </p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
