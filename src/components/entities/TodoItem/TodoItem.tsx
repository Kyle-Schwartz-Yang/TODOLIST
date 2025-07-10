import useTodo from "@features/todos/context/useTodo";
import styled from "./TodoItem.module.scss";

import { Edit, Delete, Check } from "@entities/TodoItem/ui/";

interface Props {
  id: string;
  title: string;
  complete: boolean;
}

export default function TodoItem({ id, title, complete }: Props) {
  const { toggleComplete, toggleIsEdit, openConfirmTaskModal } = useTodo();

  return (
    <li className={`${styled.item} ${complete ? styled.itemDone : ""}`}>
      <Check
        title={title}
        id={id}
        complete={complete}
        toggleComplete={toggleComplete}
      />
      <div className={styled.itemButtons}>
        <Edit id={id} toggleIsEdit={toggleIsEdit}></Edit>
        <Delete id={id} openConfirmTaskModal={openConfirmTaskModal}></Delete>
      </div>
    </li>
  );
}
