import TodoItem from "@entities/TodoItem/TodoItem";
import TodoEdit from "@entities/TodoEdit/TodoEdit";
import useTodo from "@features/todos/context/useTodo";

export default function TodoList() {
  const { todos } = useTodo();

  const pinnedTodos = todos.slice().sort((a, b) => {
    if (a.pinned === b.pinned) return 0;
    return a.pinned ? -1 : 1;
  });

  return (
    <>
      <ul className="todo__list">
        {pinnedTodos.map((item) =>
          item.isEdit ? (
            <TodoEdit
              key={item.id}
              title={item.text}
              id={item.id}
              isEdit={item.isEdit}
            />
          ) : (
            <TodoItem
              key={item.id}
              title={item.text}
              complete={item.complete}
              pinned={item.pinned}
              id={item.id}
            />
          )
        )}
      </ul>
    </>
  );
}
