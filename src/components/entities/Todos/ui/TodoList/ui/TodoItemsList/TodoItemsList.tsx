import { TodoItem, TodoEdit } from "@entities/Todos/ui";

interface Todo {
  id: string;
  text: string;
  complete: boolean;
  pinned: boolean;
  isEdit?: boolean;
}

interface TodoItemsListProps {
  todos: Todo[];
}

export default function TodoItemsList({ todos }: TodoItemsListProps) {
  return (
    <ul>
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
            pinned={item.pinned}
            id={item.id}
          />
        )
      )}
    </ul>
  );
}
