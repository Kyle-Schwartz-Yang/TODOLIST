import { FaThumbtack, FaTrash, FaEdit } from "react-icons/fa";
import { Check, Palette } from "@entities/Todos/ui/TodoItem/ui";
import { useMemo } from "react";
import { toast } from "react-toastify";
import useConfetti from "@shared/hooks/useConfetti/useConfetti";
import { useTodos } from "@entities/Todos/model";
import { IconButton } from "@shared/ui";
import { toggleComplete } from "@entities/Todos/model";
import { TodoItem as TodoItemType } from "@entities/Todos/model/types";
import {
  toggleEditing,
  togglePinned,
  deletePinned,
  changeColor,
  selectTodoToDelete,
} from "@entities/Todos/model/actions";

import styled from "./TodoItem.module.scss";

interface Props {
  id: string;
  title: string;
  complete: boolean;
  isPinned: boolean;
  color: string;
  todo: TodoItemType;
}

export default function TodoItem({
  id,
  title,
  complete,
  isPinned,
  color,
  todo,
}: Props) {
  const { dispatch, processedTodos, todos } = useTodos();
  const filterTodos = processedTodos?.filterTodos ?? [];
  const { launchConfetti } = useConfetti();

  const onToggleComplete = (id: string, complete: boolean) => {
    dispatch(toggleComplete(id));

    dispatch(deletePinned(id));

    if (!complete) {
      showDoneFeedback();
    }
  };

  const showDoneFeedback = () => {
    if (filterTodos.length === 1) launchConfetti();
  };

  const pinnedCount = useMemo(() => {
    return filterTodos.filter((item) => item.isPinned).length;
  }, [filterTodos]);

  const askDelete = (todo: TodoItemType) => {
    dispatch(selectTodoToDelete(todo));
  };

  return (
    <li
      className={`
        ${styled.item} 
        ${complete ? styled.itemComplete : ""}  
        ${styled[color]}
      `}
    >
      <Check
        title={title}
        id={id}
        complete={complete}
        onToggle={() => onToggleComplete(id, complete)}
      />

      <button
        type="button"
        className={`${styled.itemPin} ${isPinned ? styled.active : ""}`}
        onClick={() => dispatch(togglePinned(id))}
        style={{
          display: !isPinned && pinnedCount >= 3 ? "none" : "inline-block",
        }}
        disabled={complete}
      >
        <FaThumbtack />
      </button>

      <div className={styled.itemButtons}>
        <Palette
          id={id}
          onClick={(id, str) => dispatch(changeColor(id, str))}
          color={color}
        />

        <div style={{ display: "flex", gap: "2rem", flexDirection: "column" }}>
          <IconButton
            className={styled.itemIconEdit}
            onClick={() => dispatch(toggleEditing(id))}
          >
            <FaEdit />
          </IconButton>
          <IconButton
            className={styled.itemIconDelete}
            onClick={() => askDelete(todo)}
          >
            <FaTrash />
          </IconButton>
        </div>
      </div>
    </li>
  );
}
