import useTodo from "@features/todos/context/useTodo";
import { TodoPanel, TodoList, TodoEmpty, TodoCount } from "@features/todos/ui";

export default function TodoBoard() {
  const { todos } = useTodo();

  return (
    <main className="main">
      <section className="todo">
        <div className="todo__container">
          <TodoCount />
          <TodoPanel />
          {todos.length <= 0 && <TodoEmpty />}
          <TodoList />
        </div>
      </section>
    </main>
  );
}
