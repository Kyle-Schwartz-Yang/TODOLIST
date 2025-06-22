import { useEffect, useState } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
// ----------------------------------------------------------------
import Header from "@components/widgets/Header/Header";
import Footer from "@components/widgets/Footer/Footer";
import AddTodoForm from "../features/AddTodoForm/AddTodoForm";
import TaskList from "../features/TaskList/TaskList";

import TodoEmptyState from "../features/TodoEmptyState/TodoEmptyState";

import ConfirmTaskModal from "../features/ConfirmTaskModal/ConfirmTaskModal";

import Portal from "../shared/kit/templates/portal/Portal";
// import useControlledInput from "../shared/hooks/useControlledInput/useControlledInput";

// ----------------------------------------------------------------
import "./App.scss";

// =================================================================

interface TodoItem {
  id: string;
  text: string;
  complete: boolean;
  isEdit: boolean;
}

export default function App() {
  // -----------------------------------------

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

  return (
    <>
      <Header></Header>

      <main className="main">
        <section className="todo">
          <div className="todo__container">
            <h1 className="todo__title">
              T❤DO<span>LIST</span> #{count}
            </h1>

            <AddTodoForm todos={todos} setTodos={setTodos}></AddTodoForm>

            {todos.length <= 0 && <TodoEmptyState></TodoEmptyState>}

            <TaskList
              todos={todos}
              handleDelete={handleDelete}
              toggleComplete={toggleComplete}
              toggleIsEdit={toggleIsEdit}
              onEdit={onEdit}
              openConfirmTaskModal={openConfirmTaskModal}
            ></TaskList>
          </div>
        </section>
      </main>

      <Footer></Footer>

      <Portal>
        {isOpenModal && (
          <ConfirmTaskModal
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
            handleDelete={handleDelete}
          />
        )}
      </Portal>

      <ToastContainer
        position="top-right"
        autoClose={1000}
        limit={5}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover={true}
        hideProgressBar={false}
        newestOnTop={true}
        draggable
        style={{ top: "100px", right: "50px" }}
        theme="colored"
      />
    </>
  );
}
