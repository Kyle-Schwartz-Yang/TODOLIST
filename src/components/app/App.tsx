import { FormEvent, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// ----------------------------------------------------------------
import Header from "@components/widgets/Header/Header";
import Footer from "@components/widgets/Footer/Footer";
import TodoEmptyState from "../features/TodoEmptyState/TodoEmptyState";

// ----------------------------------------------------------------
import "./App.scss";

// =================================================================

interface TodoItem {
  id: string;
  text: string;
  complate: boolean;
}

export default function App() {
  const [input, setInput] = useState<string>("");
  const [todo, setTodo] = useState<TodoItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();

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
      complate: false,
    };

    setTodo([elementTodo, ...todo]);
    setInput("");
    inputRef.current?.focus();
  };

  const handleDelete = (id: string) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header></Header>
      <main className="main">
        <section className="todo">
          <div className="todo__container">
            <h1 className="todo__title">T❤DO APP</h1>

            <form action="#" className="todo__form" onSubmit={handleCreateTask}>
              <input
                type="text"
                placeholder="Type here..."
                ref={inputRef}
                value={input}
                onChange={(e) => onChangeValue(e.target.value)}
              />
              <button type="submit">ADD</button>
            </form>

            {todo.length <= 0 && <TodoEmptyState></TodoEmptyState>}

            <ul className="todo__list">
              {todo.map((item) => (
                <TodoItem
                  key={item.id}
                  title={item.text}
                  id={item.id}
                  onTaskDelete={handleDelete}
                />
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

interface TodoItemProps {
  title: string;
  id: string;
  onTaskDelete: (id: string) => void;
}

function TodoItem(props: TodoItemProps) {
  return (
    <li className="todo__item">
      <div className="todo__task-title">{props.title}</div>
      <div className="todo__buttons">
        <button type="button" className="todo__button todo__button--done">
          DONE
        </button>
        <button
          type="button"
          className="todo__button todo__button--del"
          onClick={() => props.onTaskDelete(props.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
