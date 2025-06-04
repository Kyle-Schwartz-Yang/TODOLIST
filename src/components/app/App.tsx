import { FormEvent, useState } from "react";

// ----------------------------------------------------------------
import Header from "@components/widgets/Header/Header";
import Footer from "@components/widgets/Footer/Footer";

// ----------------------------------------------------------------
import "./App.scss";

// =================================================================

interface TodoItem {
  id: number;
  text: string;
  complate: boolean;
}

export default function App() {
  const [input, setInput] = useState<string>("");
  const [todo, setTodo] = useState<TodoItem[]>([]);

  const onChangeValue = (value: string) => {
    setInput(value);
  };

  const onSubmitTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const elementTodo: TodoItem = {
      text: input,
      id: Date.now(),
      complate: false,
    };

    setTodo([...todo, elementTodo]);
    setInput("");
  };

  return (
    <>
      <Header></Header>
      <main className="main">
        <section className="todo">
          <div className="todo__container">
            <h1 className="todo__title">T❤DOLIST</h1>

            <form action="#" className="todo__form" onSubmit={onSubmitTodo}>
              <input
                type="text"
                placeholder="Create task"
                value={input}
                onChange={(e) => onChangeValue(e.target.value)}
              />
              <button type="submit">ADD</button>
            </form>

            <ul className="todo__list">
              {todo.map((item) => (
                <TodoItem key={item.id} task={item.text}></TodoItem>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

function TodoItem(props: any) {
  return (
    <li className="todo__item">
      <div className="todo__task-title">{props.task}</div>
      <div className="todo__buttons">
        <button type="button" className="todo__button todo__button--done">
          DONE
        </button>
        <button type="button" className="todo__button todo__button--del">
          Delete
        </button>
      </div>
    </li>
  );
}
