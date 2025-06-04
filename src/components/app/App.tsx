// ----------------------------------------------------------------
import Header from "@components/widgets/Header/Header";
import Footer from "@components/widgets/Footer/Footer";
import ButtonShine from "../shared/kit/atoms/buttonShine/ButtonShine";

// ----------------------------------------------------------------
import "./App.scss";

// =================================================================

export default function App() {
  return (
    <>
      <Header></Header>
      <main className="main">
        <section className="todo">
          <div className="todo__container">
            <h1 className="todo__title">T❤DOLIST</h1>

            <form action="#" className="todo__form">
              <input type="text" placeholder="Create task" />
              <button type="submit">ADD</button>
            </form>

            <ul className="todo__list">
              <TodoItem></TodoItem>
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
      <div className="todo__task-title">Create TodoList</div>
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
