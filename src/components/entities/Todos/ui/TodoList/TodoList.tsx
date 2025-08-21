import { useState } from "react";
import TodoItem from "@components/entities/Todos/ui/TodoItem/TodoItem";
import TodoEdit from "@components/entities/Todos/ui/TodoEdit/TodoEdit";
import useTodo from "@entities/Todos/model/useTodo";
import TodoCount from "@entities/Todos/ui/TodoCount/TodoCount";
import { Placeholder, EmptyCompleted } from "@shared/ui";

export default function TodoList() {
  const { uncompletedTodos, completedTodos } = useTodo();
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
    console.log(open);
  };

  return (
    <>
      <section>
        <TodoCount
          title="Active"
          counter={uncompletedTodos.length}
          onClick={toggleOpen}
        ></TodoCount>
        {open &&
          (uncompletedTodos.length === 0 ? (
            <Placeholder />
          ) : (
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
          ))}
      </section>

      <section>
        <TodoCount
          title="Completed"
          counter={completedTodos.length}
          onClick={toggleOpen}
        ></TodoCount>

        <ul>
          {completedTodos.length <= 0 && <EmptyCompleted />}
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
      </section>
    </>
  );
}
