import { TodoCount } from "@entities/Todos/ui";
import { TodoItemsList } from "@entities/Todos/ui/TodoList/ui";

type SectionKey = "active" | "completed"; // скільки треба

interface Todo {
  id: string;
  text: string;
  complete: boolean;
  isPinned: boolean;
  isEditing?: boolean;
}

interface TodoListSectionProps {
  title: string;
  todos: Todo[];
  EmptyComponent: React.ReactNode;
  open: { active: boolean; completed: boolean };
  onClick: (section: SectionKey) => void;
}

export default function TodoListSection({
  title,
  todos,
  EmptyComponent,
  open,
  onClick,
}: TodoListSectionProps) {
  const isOpen = open[title.toLowerCase() as SectionKey];

  return (
    <section>
      <TodoCount
        title={title}
        counter={todos.length}
        isOpen={isOpen}
        onClick={() => onClick(title.toLowerCase() as SectionKey)}
      />

      {isOpen &&
        (todos.length === 0 ? EmptyComponent : <TodoItemsList todos={todos} />)}
    </section>
  );
}
