import { Placeholder, EmptyCompleted } from "@shared/ui";
import { TodoListSection } from "@entities/Todos/ui/TodoList/ui";

import { useTodos } from "@entities/Todos/model";
import { useState } from "react";

export default function TodoList() {
  const { uncompletedTodos, completedTodos } = useTodos();

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

  const COLORS = ["Default", "Red", "yellow", "blue", "purple"];

  return (
    <>
      <div className="filter" style={{ margin: "0 auto" }}>
        {COLORS.map((c) => (
          <button
            key={c}
            style={{
              marginRight: "2rem",
              textTransform: "capitalize",
              border: "1px solid white",
              padding: "1rem 2rem",
              background: "none",
              cursor: "pointer",
            }}
          >
            {c}
          </button>
        ))}
      </div>

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
