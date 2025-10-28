import TodoConfirmModal from "@components/molecules/TodoConfirmModal/TodoConfirmModal";
import { useTodos } from "@app/context/todo";

import TodoPanel from "@components/organisms/TodoPanel/TodoPanel";
import TodoList from "@components/organisms/TodoList/TodoList";

import { deleteTodo, clearTodoToDelete } from "@app/context/todo/actions";
import { toast } from "react-toastify";

export default function TodoWidgets() {
  const { todoToDelete, dispatch } = useTodos();

  const onDeleteTodo = () => {
    toast.info("DELETE");
    if (!todoToDelete) return;
    dispatch(deleteTodo(todoToDelete.id));
    dispatch(clearTodoToDelete());
  };

  const onCanselDelete = () => {
    dispatch(clearTodoToDelete());
  };

  return (
    <main className="main">
      <section className="todo">
        <div className="todo__container">
          <TodoPanel />
          <TodoList />
        </div>
      </section>
      {!!todoToDelete && (
        <TodoConfirmModal onConfirm={onDeleteTodo} onCansel={onCanselDelete} />
      )}
    </main>
  );
}
