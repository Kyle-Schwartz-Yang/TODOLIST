import useTodo from "@features/todos/context/useTodo";
import { TodoPanel, TodoList, TodoEmpty, TodoCount } from "@features/todos/ui";

export default function TodoBoard() {
  const { todos } = useTodo();

  return (
    <main className="main">
      <section className="todo">
        <div className="todo__container">
          <TodoPanel />
          {todos.length <= 0 && <TodoEmpty />}
          {todos.length > 0 && <TodoList />}
        </div>
      </section>
    </main>
  );
}
