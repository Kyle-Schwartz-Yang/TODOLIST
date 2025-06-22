import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
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
import useControlledInput from "../shared/hooks/useControlledInput/useControlledInput";

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
  const title = useControlledInput("");
  // -----------------------------------------
  const [count, setCount] = useState<number>(0);
  const [todo, setTodo] = useState<TodoItem[]>([]);

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [taskIdToDelete, setTaskIdToDelete] = useState<string>("");
  // --------------------------------------------------
  const inputAdd = useRef<HTMLInputElement>(null);
  // --------------------------------------------------

  // Escape [modal and delete]
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (isOpenModal) {
          setIsOpenModal(false); // Закриваємо модалку
        } else {
          setTodo((prev) => prev.slice(1)); // Видаляємо задачу
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
    const saved = localStorage.getItem("todo");
    if (saved) {
      const stringTransforinArray: [] = JSON.parse(saved);
      setTodo(stringTransforinArray);
    }
  }, []);

  // localStorage - save change todo
  useEffect(() => {
    const arrayTransforminString = JSON.stringify(todo);
    localStorage.setItem("todo", arrayTransforminString);
    setCount(todo.length);
  }, [todo]);

  // -----------------------------------------------------

  const handleCreateTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.value.trim()) {
      toast.error("⭕ Oh no... input empty", {
        icon: false,
      });
      return;
    }
    // -----------------------------------
    const elementTodo: TodoItem = {
      id: uuidv4(),
      text: title.value,
      complete: false,
      isEdit: false,
    };

    setTodo([elementTodo, ...todo]);
    title.reset();

    inputAdd.current?.focus();
  };

  const openConfirmTaskModal = (id: string) => {
    setTaskIdToDelete(id);
    setIsOpenModal(true);
  };

  const handleDelete = () => {
    setTaskIdToDelete("");
    setIsOpenModal(false);
    toast.success("DONE!");
    setTodo(todo.filter((item) => item.id !== taskIdToDelete));
  };

  const toggleComplete = (id: string) => {
    let shouldShowToast = false;

    const updatedTodos = todo.map((item) => {
      if (item.id === id) {
        const updatedItem = { ...item, complete: !item.complete };
        if (updatedItem.complete) shouldShowToast = true;

        return updatedItem;
      }

      return item;
    });

    setTodo(updatedTodos);

    if (shouldShowToast) {
      toast.success("Виконано!");
    }
  };

  const toggleIsEdit = (id: string) => {
    setTodo(
      todo.map((item) =>
        item.id === id ? { ...item, isEdit: !item.isEdit } : item
      )
    );
  };

  const onEdit = (value: string, id: string) => {
    inputAdd.current?.focus();
    setTodo(
      todo.map((item) =>
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

            <AddTodoForm
              input={title.value}
              inputAdd={inputAdd}
              handleCreateTask={handleCreateTask}
              onChange={title.onChange}
            ></AddTodoForm>

            {todo.length <= 0 && <TodoEmptyState></TodoEmptyState>}

            <TaskList
              todos={todo}
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
      {
        <Portal>
          {isOpenModal && (
            <ConfirmTaskModal
              isOpenModal={isOpenModal}
              setIsOpenModal={setIsOpenModal}
              handleDelete={handleDelete}
            />
          )}
        </Portal>
      }
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
