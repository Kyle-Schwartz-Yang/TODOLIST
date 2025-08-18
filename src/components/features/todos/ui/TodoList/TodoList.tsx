import TodoItem from "@entities/TodoItem/TodoItem";
import TodoEdit from "@entities/TodoEdit/TodoEdit";
import useTodo from "@features/todos/context/useTodo";
import TodoCount from "@entities/TodoCount/TodoCount";
import TodoEmpty from "../TodoEmpty/TodoEmpty";

export default function TodoList() {
  const { uncompletedTodos, completedTodos } = useTodo();

  return (
    <>
      <section>
        <TodoCount title="Active" counter={uncompletedTodos.length}></TodoCount>

        <ul>
          {uncompletedTodos.length <= 0 && (
            <TodoEmpty />

            // <div
            //   style={{
            //     height: 70,
            //     borderBottom: "2px solid silver",
            //     display: "flex",
            //     padding: "3rem",
            //     alignItems: "center",
            //     // justifyContent: "center",
            //   }}
            //   className="scanner-block"
            // >
            //   🤍 empty, Congratulations
            // </div>
          )}

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
      </section>

      <section>
        <TodoCount
          title="Completed"
          counter={completedTodos.length}
        ></TodoCount>
        <ul>
          {completedTodos.length <= 0 && (
            <div
              style={{
                height: 100,
                textAlign: "center",
                display: "flex",
                padding: "3rem",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="scanner-block"
            >
              Just start
            </div>
          )}
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
