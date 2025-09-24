import { useState } from "react";
import { Placeholder, EmptyCompleted } from "@shared/ui";
import { TodoListSection, TodoFilter } from "@entities/Todos/ui/TodoList/ui";
import { useTodos, updFilterColor } from "@entities/Todos/model";

export default function TodoList() {
  const { filterColor, processedTodos, dispatch } = useTodos();
  const completedTodos = processedTodos?.completedTodos ?? [];
  const filterTodos = processedTodos?.filterTodos ?? [];

  const [openSection, setOpenSection] = useState({
    active: true,
    completed: false,
  });

  const toggleSection = (section: "active" | "completed") => {
    setOpenSection((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <>
      <TodoFilter
        activeColor={filterColor}
        onSelect={(c) => dispatch(updFilterColor(c))}
      ></TodoFilter>

      <TodoListSection
        title="Active"
        todos={filterTodos}
        EmptyComponent={<Placeholder />}
        open={openSection}
        onClick={toggleSection}
      />
      <TodoListSection
        title="Completed"
        todos={completedTodos}
        EmptyComponent={<EmptyCompleted />}
        open={openSection}
        onClick={toggleSection}
      />
    </>
  );
}
