import { useState, useEffect } from "react";
import useTodo from "@features/todos/context/useTodo";
import styled from "./TodoItem.module.scss";

import { Edit, Delete, Check, PinnedButton } from "@entities/TodoItem/ui/";

interface Props {
  id: string;
  title: string;
  complete: boolean;
  pinned: boolean;
}

export default function TodoItem({ id, title, complete, pinned }: Props) {
  const { toggleComplete, toggleIsEdit, openConfirmTaskModal, onChangePinned } =
    useTodo();

  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (isAnimating) {
      timeoutId = setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }

    return () => clearTimeout(timeoutId);
  }, [isAnimating]);

  const handleClick = () => {
    setIsAnimating(true);
    onChangePinned(id);
  };

  return (
    <li className={`${styled.item} ${complete ? styled.itemDone : ""}`}>
      <Check
        title={title}
        id={id}
        complete={complete}
        toggleComplete={toggleComplete}
      />

      <div className={styled.itemButtons}>
        <Palette></Palette>

        <div style={{ display: "flex", gap: "2rem" }}>
          <Edit id={id} toggleIsEdit={toggleIsEdit}></Edit>
          <Delete id={id} openConfirmTaskModal={openConfirmTaskModal}></Delete>
        </div>
      </div>

      <PinnedButton
        pinned={pinned}
        handleClick={handleClick}
        isAnimating={isAnimating}
      ></PinnedButton>
    </li>
  );
}

function Palette() {
  return (
    <div className={styled.palette}>
      <button className={`${styled.btn} ${styled.default}`}></button>
      <button className={`${styled.btn} ${styled.red}`}></button>
      <button className={`${styled.btn} ${styled.yellow}`}></button>
      <button className={`${styled.btn} ${styled.blue}`}></button>
      <button className={`${styled.btn} ${styled.purple}`}></button>
    </div>
  );
}
