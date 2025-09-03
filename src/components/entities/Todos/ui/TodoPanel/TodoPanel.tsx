import React from "react";
//----------------------------------------------
import { toast } from "react-toastify";
//----------------------------------------------

import { useInput } from "@shared/hooks";
import { useTodos } from "@entities/Todos/model";
import { createTodo } from "@entities/Todos/model/actions";
//--------------------------------------------------------
import styled from "./TodoPanel.module.scss";
//----------------------------------------------

export default function TodoPanel() {
  const { dispatch } = useTodos();
  const { value, onChange, onReset } = useInput("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onCreateTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value.trim()) {
      toast.error("Oh, input empty ...", { toastId: "toast-delete" });
      return;
    }
    dispatch(createTodo(value));
    onReset();
    inputRef.current?.focus();
  };

  return (
    <form className={styled.form} onSubmit={onCreateTodo}>
      <label htmlFor="todo-input" className="visually-hidden">
        Todo text
      </label>
      <input
        id="todo-input"
        type="text"
        placeholder="Type here..."
        aria-invalid={!value.trim()}
        value={value}
        onChange={onChange}
        ref={inputRef}
        className={styled.formInput}
      />
      <button className={styled.button} type="submit" aria-label="Add todo">
        <span className={styled.buttonSign}>+</span>
        <span className={styled.buttonText}>Add</span>
      </button>
    </form>
  );
}
