import { useRef, useEffect } from "react";
import { toast } from "react-toastify";
import { FaCheck } from "react-icons/fa";
import { useTodos } from "@entities/Todos/model";
import { updateTodo } from "@entities/Todos/model/actions";
import { useInput } from "@shared/hooks";
import styled from "./TodoEdit.module.scss";
// import { IconButton } from "@shared/ui";

interface Props {
  id: string;
  title: string;
}

export default function TodoEdit({ title, id }: Props) {
  const { value, onChange } = useInput(title);
  const { dispatch } = useTodos();
  const inputFocus = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputFocus.current?.focus();
  }, []);

  const onUpdateTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value.trim()) {
      toast.error("Oh, input empty ...", { toastId: "toast-edit-empty" });
      inputFocus.current?.focus();
      return;
    }

    dispatch(updateTodo(value, id));
  };

  return (
    <li className={`${styled.edit}`}>
      <form onSubmit={onUpdateTodo} className={styled.editForm}>
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
          ref={inputFocus}
          className={styled.editInput}
        />

        {/* ------------------IconButton?? but submit */}
        <button
          type="submit"
          className={styled.editConfirm}
          aria-label="Edit todo"
        >
          <FaCheck></FaCheck>
        </button>
      </form>
    </li>
  );
}
