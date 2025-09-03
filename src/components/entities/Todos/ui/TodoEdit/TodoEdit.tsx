import { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import { useTodos } from "@entities/Todos/model";
import { Confirm } from "@entities/Todos/ui/TodoEdit/ui";
import { updateTodo } from "@entities/Todos/model/actions";
import { useInput } from "@shared/hooks";

import styled from "./TodoEdit.module.scss";

interface Props {
  title: string;
  id: string;
  isEditing: boolean;
}

export default function TodoEdit({ title, id, isEditing }: Props) {
  const { value, onChange } = useInput(title);
  const { dispatch } = useTodos();
  const inputEdit = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing) {
      inputEdit.current?.focus();
    }
  }, [isEditing]);

  const validateAndEdit = () => {
    if (value.trim().length === 0) {
      toast.error("ОЙЙ 😬");
      inputEdit.current?.focus();
      return false;
    }
    dispatch(updateTodo(value, id));

    return true;
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateAndEdit();
  };

  const handleConfirm = () => {
    validateAndEdit();
  };

  return (
    <li className={`${styled.edit}`}>
      <form onSubmit={onSubmit} className={styled.editForm}>
        <label htmlFor="edit-input" className="visually-hidden">
          Edit todo value
        </label>
        <input
          id="edit-input"
          type="text"
          placeholder="Change value..."
          aria-invalid={!value.trim()}
          value={value}
          onChange={onChange}
          ref={inputEdit}
          className={styled.editInput}
        />
        <Confirm handleConfirm={handleConfirm}></Confirm>
      </form>
    </li>
  );
}
