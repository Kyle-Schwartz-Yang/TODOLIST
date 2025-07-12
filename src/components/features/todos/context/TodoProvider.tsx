import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { TodoContext } from "./TodoContext";
import { TodoItem, TodoContextType } from "@features/todos/model/types";

interface TodoProviderProps {
  children: React.ReactNode;
}

export default function TodoProvider({ children }: TodoProviderProps) {
  // -----------------------------------------
  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [taskIdToDelete, setTaskIdToDelete] = useState<string>("");
  // --------------------------------------------------

  // Escape [modal and delete]
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (isOpenModal) {
          setIsOpenModal(false); // Закриваємо модалку
        } else {
          setTodos((prev) => prev.slice(1)); // Видаляємо задачу
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpenModal]);

  // localStorage - show todo start APP
  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      const stringTransforinArray = JSON.parse(saved);
      setTodos(stringTransforinArray);
    }
  }, []);

  // localStorage - save change todo
  useEffect(() => {
    const arrayTransforminString = JSON.stringify(todos);
    localStorage.setItem("todos", arrayTransforminString);
    setCount(todos.length);
  }, [todos]);

  // -----------------------------------------------------

  const openConfirmTaskModal = (id: string) => {
    setTaskIdToDelete(id);
    setIsOpenModal(true);
  };

  const handleDelete = () => {
    setTodos(todos.filter((item) => item.id !== taskIdToDelete));

    setTaskIdToDelete("");
    setIsOpenModal(false);
    toast.success("DONE!");
  };

  const toggleComplete = (id: string) => {
    let shouldShowToast = false;

    const updatedTodos = todos.map((item) => {
      if (item.id === id) {
        const updatedItem = { ...item, complete: !item.complete };
        if (updatedItem.complete) shouldShowToast = true;

        return updatedItem;
      }

      return item;
    });

    setTodos(updatedTodos);

    if (shouldShowToast) {
      toast.success("Виконано!");
    }
  };

  const toggleIsEdit = (id: string) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, isEdit: !item.isEdit } : item
      )
    );
  };

  const onEdit = (value: string, id: string) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, text: value, isEdit: !item.isEdit } : item
      )
    );
  };

  const onChangePinned = (id: string) => {
    console.log("pinned");
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, pinned: !item.pinned } : item
      )
    );
  };

  const value: TodoContextType = {
    count,
    isOpenModal,
    setIsOpenModal,
    todos,
    setTodos,
    openConfirmTaskModal,
    handleDelete,
    toggleComplete,
    toggleIsEdit,
    onEdit,
    onChangePinned,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}
