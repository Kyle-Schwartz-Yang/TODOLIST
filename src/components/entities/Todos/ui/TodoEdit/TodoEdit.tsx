import { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";

import useTodo from "@components/entities/Todos/model/useTodo";

import { Confirm } from "@components/entities/Todos/ui/TodoEdit/ui";

import styled from "./TodoEdit.module.scss";

interface Props {
  title: string;
  id: string;
  isEdit: boolean;
}

export default function TodoEdit(props: Props) {
  const { onEdit } = useTodo();

  const [input, setInput] = useState<string>(props.title);
  const inputEdit = useRef<HTMLInputElement>(null);

  const onChangeValue = (value: string) => {
    setInput(value);
  };

  useEffect(() => {
    if (props.isEdit) {
      inputEdit.current?.focus();
    }
  }, [props.isEdit]);

  const validateAndEdit = () => {
    if (input.trim().length === 0) {
      toast.error("ОЙЙ 😬");
      inputEdit.current?.focus();
      return false;
    }
    onEdit(input, props.id);
    return true;
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Щоб форма не обробила submit
      event.stopPropagation(); // Щоб не пішло вгору по DOM
      validateAndEdit();
    }
  };

  const handleConfirm = () => {
    validateAndEdit();
  };

  return (
    <li className={`${styled.item} ${props.isEdit ? styled.itemEdit : ""}`}>
      <input
        type="text"
        placeholder="Change value..."
        value={input}
        ref={inputEdit}
        onChange={(e) => onChangeValue(e.target.value)}
        className={styled.itemInput}
        onKeyDown={handleKeyPress}
      />

      <Confirm handleConfirm={handleConfirm}></Confirm>
    </li>
  );
}
