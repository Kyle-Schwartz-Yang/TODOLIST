import TodoItem from "@entities/TodoItem/TodoItem";
import TodoEdit from "@entities/TodoEdit/TodoEdit";
import useTodo from "@features/todos/context/useTodo";

import TodoCount from "@entities/TodoCount/TodoCount";

export default function TodoList() {
  const { todos, uncompletedTodos, completedTodos } = useTodo();

  return (
    <>
      <TodoCount title="Active" counter={uncompletedTodos.length}></TodoCount>

      <ul>
        {uncompletedTodos.map((item) =>
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

      <TodoCount title="Completed" counter={completedTodos.length}></TodoCount>
      <ul>
        {completedTodos.map((item) =>
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
