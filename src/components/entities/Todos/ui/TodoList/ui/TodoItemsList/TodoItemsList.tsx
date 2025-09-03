import { TodoItem, TodoEdit } from "@entities/Todos/ui";

interface Todo {
  id: string;
  text: string;
  complete: boolean;
  isPinned: boolean;
  isEditing?: boolean;
}

interface TodoItemsListProps {
  todos: Todo[];
}

export default function TodoItemsList({ todos }: TodoItemsListProps) {
  return (
    <ul>
      {todos.map((item) =>
        item.isEditing ? (
          <TodoEdit
            key={item.id}
            title={item.text}
            id={item.id}
            isEditing={item.isEditing}
          />
        ) : (
          <TodoItem
            key={item.id}
            title={item.text}
            complete={item.complete}
            isPinned={item.isPinned}
            color={item.color}
            id={item.id}
          />
        )
      )}
    </ul>
  );
}
