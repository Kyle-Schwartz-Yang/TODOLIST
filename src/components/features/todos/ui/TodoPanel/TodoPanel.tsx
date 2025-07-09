import React from "react";
//----------------------------------------------
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
//----------------------------------------------
import Submit from "./ui/CreateBtn/CreateBtn";
import useControlledInput from "@shared/hooks/useControlledInput/useControlledInput";
import useTodo from "../../context/useTodo";
//----------------------------------------------

interface TodoItem {
  id: string;
  text: string;
  complete: boolean;
  isEdit: boolean;
}

export default function TodoPanel() {
  const { todos, setTodos } = useTodo();
  const input = useControlledInput("");

  const handleCreateTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input.value.trim()) {
      toast.error("⭕ Oh no... input empty", {
        icon: false,
      });
      return;
    }
    // -----------------------------------
    const elementTodo: TodoItem = {
      id: uuidv4(),
      text: input.value,
      complete: false,
      isEdit: false,
    };

    setTodos([elementTodo, ...todos]);
    input.reset();
  };

  return (
    <form className="todo__form" onSubmit={handleCreateTask}>
      <input
        type="text"
        placeholder="Type here..."
        value={input.value}
        onChange={input.onChange}
        className="todo__input"
      />
      <Submit></Submit>
    </form>
  );
}
