import { useState } from "react";
import { Placeholder, EmptyCompleted } from "@shared/ui";
import { TodoListSection } from "@entities/Todos/ui/TodoList/ui";
import { useTodos } from "@entities/Todos/model";
import styled from './TodoList.module.scss';


export default function TodoList() {
  const { dispatch, processedTodos } = useTodos();
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


    const onFilterColor = (c: string) => {
        dispatch({type: 'SET_FILTER_COLOR', payload: c})
    }


  return (
    <>
        <div className={styled.filter}>
            {COLORS.map((c) => (
                <button
                    key={c}
                    className={styled.filterBtn}
                    onClick={() => onFilterColor(c)}
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
