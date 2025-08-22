import { Placeholder, EmptyCompleted } from "@shared/ui";
import { TodoListSection } from "@entities/Todos/ui/TodoList/ui";

import useTodo from "@entities/Todos/model/useTodo";
import { useState } from "react";

export default function TodoList() {
  const { uncompletedTodos, completedTodos } = useTodo();

  const [openSection, setOpenSection] = useState({
    active: true,
    completed: true,
  });

  const toggleSection = (section: "active" | "completed") => {
    setOpenSection((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <>
      <TodoListSection
        title="Active"
        todos={uncompletedTodos}
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
