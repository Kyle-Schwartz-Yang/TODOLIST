import ItemTodo from "./atom/ItemTodo/ItemTodo";
import EditTodoItem from "./atom/EditTodo/EditTodo";

interface TodoItem {
  id: string;
  text: string;
  complete: boolean;
  isEdit: boolean;
}

interface Props {
  todos: TodoItem[];
  handleDelete: (id: string) => void;
  toggleComplete: (id: string) => void;
  toggleIsEdit: (id: string) => void;
  onEdit: (value: string, id: string) => void;
  setIsOpenModal: (isOpen: boolean) => void;
}

export default function TaskList(props: Props) {
  return (
    <>
      <ul className="todo__list">
        {props.todos.map((item) =>
          item.isEdit ? (
            <EditTodoItem
              key={item.id}
              title={item.text}
              id={item.id}
              onEdit={props.onEdit}
              isEdit={item.isEdit}
            />
          ) : (
            <ItemTodo
              key={item.id}
              title={item.text}
              complete={item.complete}
              id={item.id}
              handleDelete={props.handleDelete}
              toggleComplete={props.toggleComplete}
              toggleIsEdit={props.toggleIsEdit}
              setIsOpenModal={props.setIsOpenModal}
            />
          )
        )}
      </ul>
    </>
  );
}
