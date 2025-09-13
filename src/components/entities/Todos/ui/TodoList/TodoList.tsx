import { useState } from "react";
import { Placeholder, EmptyCompleted } from "@shared/ui";
import { TodoListSection } from "@entities/Todos/ui/TodoList/ui";
import { useTodos, updFilterColor } from "@entities/Todos/model";
import styled from './TodoList.module.scss';


export default function TodoList() {
  const { filterColor, processedTodos, dispatch  } = useTodos();
  const completedTodos = processedTodos?.completedTodos ?? [];
  const filterTodos = processedTodos?.filterTodos ?? [];


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

    const COLORS = ["default", "red", "yellow", "blue", "purple"] as const;

  return (
    <>
        <div className={styled.filter}>
            {COLORS.map((c) => (
                <button
                    key={c}
                    className={`${styled.filterBtn} ${filterColor === c ? `${styled.filterBtnActive}` : ''}`}
                    onClick={() => dispatch(updFilterColor(c))}
                >
                    {c}
                </button>
            ))}
        </div>

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
