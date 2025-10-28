import { ReactNode } from "react";
// import { TodoCount } from "@entities/Todos/ui";
// import { TodoItemsList } from "@components/entities/Todos/ui/TodoList/ui";
import { TodoItem as TodoItemType } from "@app/context/todo/types";

import TodoCount from "@components/molecules/TodoCount/TodoCount";
import TodoItem from "@components/molecules/TodoItem/TodoItem";
import TodoEdit from "@components/molecules/TodoEdit/TodoEdit";

type SectionKey = "active" | "completed"; // скільки треба

interface TodoCollapsibleSectionProps {
  title: string;
  todos: TodoItemType[];
  EmptyComponent: ReactNode;
  open: { active: boolean; completed: boolean };
  onClick: (section: SectionKey) => void;
}

export default function TodoCollapsibleSection({
  title,
  todos,
  EmptyComponent,
  open,
  onClick,
}: TodoCollapsibleSectionProps) {
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
        (todos.length === 0 ? (
          EmptyComponent
        ) : (
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
        ))}
    </section>
  );
}
