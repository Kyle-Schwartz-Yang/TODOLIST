import { TodoItem as TodoItemType } from "@entities/Todos/model/types";
import { TodoItem, TodoEdit } from "@entities/Todos/ui";

type TodoItemsListProps = {
  todos: TodoItemType[];
};

export default function TodoItemsList({ todos }: TodoItemsListProps) {
  return (
    <ul>
      {todos.map((item) =>
        item.isEditing ? (
          <TodoEdit key={item.id} title={item.text} id={item.id} />
        ) : (
          <TodoItem
            todo={item}
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
