import { useState, useEffect, useRef } from "react";
import { useTodo } from "@entities/Todos/model";
//----------------------------------------------------------------
import confetti from "canvas-confetti";

//----------------------------------------------------------------

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

const useConfetti = () => {
  const lastLaunch = useRef(0);

  const launchConfetti = () => {
    const now = Date.now();

    // перевіряємо, чи минуло 2 сек
    if (now - lastLaunch.current < 2000) return;

    lastLaunch.current = now; // оновлюємо останній запуск

    const end = now + 1000;
    const colors = ["#f8c3da", "#8e0043"];

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });

      if (Date.now() < end) requestAnimationFrame(frame);
    };

    frame();
  };

  return launchConfetti;
};

export default function TodoItem({ id, title, complete, pinned }: Props) {
  const { toggleComplete, toggleIsEdit, openConfirmTaskModal, onChangePinned } =
    useTodo();

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

  const launchConfetti = () => {
    const end = Date.now() + 1000;
    const colors = ["#f8c3da", "#8e0043"];

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });

      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  };

  const handleComplete = () => {
    toggleComplete(id);

    if (!complete) launchConfetti();
  };

  return (
    <li className={`${styled.item} ${complete ? styled.itemDone : ""}`}>
      <Check
        title={title}
        id={id}
        complete={complete}
        onToggle={handleComplete}
      />

      <div className={styled.itemButtons}>
        <Palette></Palette>

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
