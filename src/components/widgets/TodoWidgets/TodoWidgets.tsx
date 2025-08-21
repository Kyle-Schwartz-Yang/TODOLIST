import { useTodo } from "@entities/Todos/model";
import { TodoPanel, TodoList } from "@components/entities/Todos/ui";
import { Placeholder } from "@shared/ui";

export default function TodoWidgets() {
  const { todos } = useTodo();
  const hasTodos = todos.length > 0;

  return (
    <main className="main">
      <section className="todo">
        <div className="todo__container">
          <TodoPanel />
          {hasTodos ? <TodoList /> : <Placeholder />}
        </div>
      </section>
    </main>
  );
}
