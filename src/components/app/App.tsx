import { FormEvent, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
// ----------------------------------------------------------------
import Header from "@components/widgets/Header/Header";
import Footer from "@components/widgets/Footer/Footer";
import TodoEmptyState from "../features/TodoEmptyState/TodoEmptyState";

import Checklist from "../shared/kit/atoms/CheckList/CheckList";

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
  const inputAdd = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputAdd.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setTodo((prev) => prev.slice(1)); // прибирає перший елемент
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
  }, [todo]);

  const onChangeValue = (value: string) => {
    setInput(value);
  };

  const handleCreateTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
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
    toast("⚡ Звільнено з космічної станції", {
      icon: false,
    });
  };

  const toggleCompele = (id: string) => {
    setTodo(
      todo.map((item) =>
        item.id === id ? { ...item, complete: !item.complete } : item
      )
    );
  };

  const toggleIsEdit = (id: string) => {
    setTodo(
      todo.map((item) =>
        item.id === id ? { ...item, isEdit: !item.isEdit } : item
      )
    );

    // setTimeout(() => {
    //   inputEdit.current?.focus();
    // }, 0);
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
              T❤DO<span>LIST</span>
            </h1>

            <form action="#" className="todo__form" onSubmit={handleCreateTask}>
              <input
                type="text"
                placeholder="Type here..."
                ref={inputAdd}
                value={input}
                onChange={(e) => onChangeValue(e.target.value)}
              />

              <button className="Btn" type="submit">
                <div className="sign">+</div>

                <div className="text">Add</div>
              </button>
            </form>

            {todo.length <= 0 && <TodoEmptyState></TodoEmptyState>}

            <ul className="todo__list">
              {todo.map((item) =>
                item.isEdit ? (
                  <EditTodoItem
                    key={item.id}
                    title={item.text}
                    id={item.id}
                    onEdit={onEdit}
                    isEdit={item.isEdit}
                  ></EditTodoItem>
                ) : (
                  <TodoItem
                    key={item.id}
                    title={item.text}
                    complete={item.complete}
                    id={item.id}
                    handleDelete={handleDelete}
                    toggleComplete={toggleCompele}
                    toggleIsEdit={toggleIsEdit}
                  />
                )
              )}
            </ul>
          </div>
        </section>
      </main>
      <Footer></Footer>
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

interface TodoItemProps {
  title: string;
  id: string;
  complete: boolean;
  handleDelete: (id: string) => void;
  toggleComplete: (id: string) => void;
  toggleIsEdit: (id: string) => void;
}

function TodoItem(props: TodoItemProps) {
  return (
    <li className={`todo__item ${props.complete ? "done" : ""}`}>
      {/* <div
        className="todo__task-title"
        onClick={() => props.toggleComplete(props.id)}
      >w
        {props.title}
      </div> */}

      <Checklist
        title={props.title}
        id={props.id}
        complete={props.complete}
        toggleComplete={props.toggleComplete}
      ></Checklist>

      <div className="todo__buttons">
        {/* <button
          type="button"
          className="todo__button todo__button--done"
          onClick={() => props.toggleIsEdit(props.id)}
        >
          Edit
        </button> */}

        <button
          className="editBtn"
          type="button"
          onClick={() => props.toggleIsEdit(props.id)}
          aria-label="Edit Task"
        >
          <svg height="1em" viewBox="0 0 512 512">
            <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
          </svg>
        </button>

        {/* <button
          type="button"
          className="todo__button todo__button--del"
          onClick={() => props.handleDelete(props.id)}
        >
          Delete
        </button> */}

        <button
          aria-label="Delete item"
          className="delete-button  "
          onClick={() => props.handleDelete(props.id)}
        >
          {/* ESC */}
          <svg
            className="trash-svg"
            viewBox="0 -10 64 74"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="trash-can">
              <rect
                x="16"
                y="24"
                width="32"
                height="30"
                rx="3"
                ry="3"
                fill="#e74c3c"
              ></rect>

              <g transform-origin="12 18" id="lid-group">
                <rect
                  x="12"
                  y="12"
                  width="40"
                  height="6"
                  rx="2"
                  ry="2"
                  fill="#c0392b"
                ></rect>
                <rect
                  x="26"
                  y="8"
                  width="12"
                  height="4"
                  rx="2"
                  ry="2"
                  fill="#c0392b"
                ></rect>
              </g>
            </g>
          </svg>
        </button>
      </div>
    </li>
  );
}

interface EditTodoItemProps {
  title: string;
  id: string;
  onEdit: (value: string, id: string) => void;
  isEdit: boolean;
  // inputEdit: RefObject<HTMLInputElement | null>;
}

function EditTodoItem(props: EditTodoItemProps) {
  const [input, setInput] = useState<string>(props.title);
  const inputEdit = useRef<HTMLInputElement>(null);

  const onChangeValue = (value: string) => {
    setInput(value);
  };

  useEffect(() => {
    if (props.isEdit) {
      inputEdit.current?.focus();
    }
  }, [props.isEdit]);

  const validateAndEdit = () => {
    if (input.trim().length === 0) {
      toast.error("Поле не може бути порожнім! 😬");
      inputEdit.current?.focus();
      return false;
    }
    props.onEdit(input, props.id);
    return true;
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      validateAndEdit();
    }
  };

  const handleConfirm = () => {
    validateAndEdit();
  };

  return (
    <li className={`todo__item`}>
      <input
        type="text"
        placeholder="Change value..."
        value={input}
        ref={inputEdit}
        onChange={(e) => onChangeValue(e.target.value)}
        className="todo__input-edit"
        onKeyDown={handleKeyPress}
      />

      <div className="todo__buttons">
        <button
          type="button"
          className="todo__button todo__button--done"
          onClick={handleConfirm}
        >
          Ok
        </button>
      </div>
    </li>
  );
}
