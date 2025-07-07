import { useTodo } from "../Todo/context/useTodo";
import AddTodoForm from "../AddTodoForm/AddTodoForm";
import TodoEmptyState from "../TodoEmptyState/TodoEmptyState";
import TaskList from "../TaskList/TaskList";

export default function Main() {
  const { count, todos } = useTodo();

  return (
    <main className="main">
      <section className="todo">
        <div className="todo__container">
          <h1 className="todo__title">
            created: <span>{count}</span>
          </h1>

          <AddTodoForm></AddTodoForm>

          {todos.length <= 0 && <TodoEmptyState></TodoEmptyState>}

          <TaskList></TaskList>
        </div>
      </section>
    </main>
  );
}
