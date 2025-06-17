import { FormEvent, useEffect, useRef, useState } from "react";
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

import Modal from "../shared/kit/molecules/modal/Modal";
import Portal from "../shared/kit/templates/portal/Portal";

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
  const [input, setInput] = useState<string>("");
  const [todo, setTodo] = useState<TodoItem[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [count, setCount] = useState(0);
  // const [isOpenModal, setIsOpenModal] = useState(false);
  const inputAdd = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputAdd.current?.focus();

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

  // Завантажити з localStorage при старті
  useEffect(() => {
    const saved = localStorage.getItem("todo");
    if (saved) {
      setTodo(JSON.parse(saved));
    }
  }, []);

  // Зберігати в localStorage кожного разу, коли todo змінюється
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
    setCount(todo.length);
  }, [todo]);

  const onChangeValue = (value: string) => {
    setInput(value);
  };

  const handleCreateTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input.trim()) {
      toast.error("⭕ Oh no... input empty", {
        icon: false,
      });
      return;
    }
    // -----------------------------------
    const elementTodo: TodoItem = {
      id: uuidv4(),
      text: input,
      complete: false,
      isEdit: false,
    };

    setTodo([elementTodo, ...todo]);
    setInput("");
    inputAdd.current?.focus();
  };

  const handleDelete = (id: string) => {
    setTodo(todo.filter((item) => item.id !== id));
    // toast("⚡ Звільнено з космічної станції");
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

      <button
        type="button"
        style={{ padding: 20, backgroundColor: "blue" }}
        onClick={() => setIsOpenModal(true)}
      >
        Модальное окно
      </button>

      <main className="main">
        <section className="todo">
          <div className="todo__container">
            <h1 className="todo__title">
              T❤DO<span>LIST</span> #{count}
            </h1>

            <AddTodoForm
              input={input}
              inputAdd={inputAdd}
              handleCreateTask={handleCreateTask}
              onChangeValue={onChangeValue}
            ></AddTodoForm>

            {todo.length <= 0 && <TodoEmptyState></TodoEmptyState>}
            <TaskList
              todos={todo}
              handleDelete={handleDelete}
              toggleComplete={toggleComplete}
              toggleIsEdit={toggleIsEdit}
              onEdit={onEdit}
              setIsOpenModal={setIsOpenModal}
            ></TaskList>
          </div>
        </section>
      </main>
      <Footer></Footer>
      {
        <Portal>
          {isOpenModal && (
            <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
              <p>Lorem, ipsum dolor.</p>
            </Modal>
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
