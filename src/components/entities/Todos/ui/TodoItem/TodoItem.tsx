import { FaThumbtack, FaTrash, FaEdit } from "react-icons/fa";
import { Check, Palette } from "@entities/Todos/ui/TodoItem/ui";

import { toast } from "react-toastify";
import useConfetti from "@shared/hooks/useConfetti/useConfetti";
import { useTodos } from "@entities/Todos/model";
import { IconButton } from "@shared/ui";
import { toggleComplete } from "@entities/Todos/model";
import { TodoItem as TodoItemType } from "@entities/Todos/model/types";
import {
  toggleEditing,
  togglePinned,
  changeColor,
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

  const { launchConfetti } = useConfetti();
  const { openConfirmTaskModal, dispatch, processedTodos } = useTodos();
  const filterTodos = processedTodos?.filterTodos ?? [];

  const onToggleComplete = (id: string) => {
    dispatch(toggleComplete(id));
    showDoneFeedback();
  };

  const showDoneFeedback = () => {
    toast.success("DONE!");
    if (filterTodos.length === 1) launchConfetti();
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
        onToggle={() => onToggleComplete(id)}
      />

      <button
        type="button"
        className={`${styled.itemPin} ${isPinned ? styled.active : ""}`}
        onClick={() => dispatch(togglePinned(id))}
      >
        <FaThumbtack />
      </button>

      <div className={styled.itemButtons}>
        <Palette
          id={id}
          onClick={(id, str) => dispatch(changeColor(id, str))}
          color={color}
        />

        <div style={{ display: "flex", gap: "2rem" }}>
          <IconButton
            className={styled.itemIconEdit}
            onClick={() => dispatch(toggleEditing(id))}
          >
            <FaEdit />
          </IconButton>
          <IconButton
            className={styled.itemIconDelete}
            onClick={() => openConfirmTaskModal(todo)}
          >
            <FaTrash />
          </IconButton>
        </div>
      </div>
    </li>
  );
}
