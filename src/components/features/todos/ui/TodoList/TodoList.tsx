import TodoItem from "@entities/TodoItem/TodoItem";
import TodoEdit from "@entities/TodoEdit/TodoEdit";
import useTodo from "@features/todos/context/useTodo";

export default function TodoList() {
  const { todos } = useTodo();

  return (
    <>
      <ul className="todo__list">
        {todos.map((item) =>
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
              id={item.id}
            />
          )
        )}
      </ul>
    </>
  );
}
