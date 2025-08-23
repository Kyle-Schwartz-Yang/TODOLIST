import { useState, useEffect, useRef, use } from "react";
import { useTodo } from "@entities/Todos/model";

import {
  Edit,
  Delete,
  Check,
  Pinned,
  Palette,
} from "@components/entities/Todos/ui/TodoItem/ui";

import styled from "./TodoItem.module.scss";

interface Props {
  id: string;
  title: string;
  complete: boolean;
  pinned: boolean;
}

export default function TodoItem({ id, title, complete, pinned }: Props) {
  const { toggleComplete, toggleIsEdit, openConfirmTaskModal, onChangePinned } =
    useTodo();

  const handleComplete = () => {
    toggleComplete(id);
  };

  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (isAnimating) {
      timeoutId = setTimeout(() => {
        setIsAnimating(false);
      }, 3000);
    }

    return () => clearTimeout(timeoutId);
  }, [isAnimating]);

  const handleClick = () => {
    setIsAnimating(true);
    onChangePinned(id);
  };

  const [isColorPalette, setIsColorPalette] = useState<string>("default");

  const handlePalette = (str: string) => {
    setIsColorPalette(str);
  };
  console.log(isColorPalette);

  return (
    <li
      className={`
        ${styled.item} 
        ${complete ? styled.itemDone : ""}  
        ${styled[isColorPalette]}
      `}
    >
      <Check
        title={title}
        id={id}
        complete={complete}
        onToggle={handleComplete}
      />

      <div className={styled.itemButtons}>
        <Palette onClick={handlePalette} color={isColorPalette}></Palette>

        <div style={{ display: "flex", gap: "2rem" }}>
          <Edit id={id} toggleIsEdit={toggleIsEdit}></Edit>
          <Delete id={id} openConfirmTaskModal={openConfirmTaskModal}></Delete>
        </div>
      </div>

      <Pinned
        pinned={pinned}
        onClick={handleClick}
        isAnimating={isAnimating}
      ></Pinned>
    </li>
  );
}
