import ItemTodo from "./atom/ItemTodo/ItemTodo";
import EditTodoItem from "./atom/EditTodo/EditTodo";
import { useTodo } from "../Todo/context/useTodo";

// interface TodoItem {
//   id: string;
//   text: string;
//   complete: boolean;
//   isEdit: boolean;
// }

// interface Props {
//   todos: TodoItem[];
//   handleDelete: (id: string) => void;
//   toggleComplete: (id: string) => void;
//   toggleIsEdit: (id: string) => void;
//   onEdit: (value: string, id: string) => void;
//   openConfirmTaskModal: (id: string) => void;
// }

//  todos={todos}
//       handleDelete={handleDelete}
//       toggleComplete={toggleComplete}
//       toggleIsEdit={toggleIsEdit}
//       onEdit={onEdit}
//       openConfirmTaskModal={openConfirmTaskModal}

export default function TaskList() {
  const { todos } = useTodo();

  return (
    <>
      <ul className="todo__list">
        {todos.map((item) =>
          item.isEdit ? (
            <EditTodoItem
              key={item.id}
              title={item.text}
              id={item.id}
              isEdit={item.isEdit}
            />
          ) : (
            <ItemTodo
              key={item.id}
              title={item.text}
              complete={item.complete}
              id={item.id}
              // handleDelete={handleDelete}
              // toggleComplete={toggleComplete}
              // toggleIsEdit={toggleIsEdit}
              // openConfirmTaskModal={openConfirmTaskModal}
            />
          )
        )}
      </ul>
    </>
  );
}
