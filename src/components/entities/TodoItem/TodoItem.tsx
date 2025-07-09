import useTodo from "@features/todos/context/useTodo";

import { Edit, Delete, Check } from "@entities/TodoItem/ui";

interface Props {
  id: string;
  title: string;
  complete: boolean;
}

export default function TodoItem({ id, title, complete }: Props) {
  const { toggleComplete, toggleIsEdit, openConfirmTaskModal } = useTodo();

  return (
    <li className={`todo__item ${complete ? "done" : ""}`}>
      <Check
        title={title}
        id={id}
        complete={complete}
        toggleComplete={toggleComplete}
      />
      <div className="todo__buttons">
        <Edit id={id} toggleIsEdit={toggleIsEdit}></Edit>
        <Delete id={id} openConfirmTaskModal={openConfirmTaskModal}></Delete>
      </div>
    </li>
  );
}
