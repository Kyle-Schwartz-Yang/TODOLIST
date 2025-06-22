// ----------------------------------------------------------------
import Header from "@components/widgets/Header/Header";
import Footer from "@components/widgets/Footer/Footer";
import Main from "../features/Main/Main";
import { TodoModals } from "../features/TodoModals/TodoModals";

import Toster from "@shared/kit/molecules/toster/Toster";
// ----------------------------------------------------------------
import TodoProvider from "../features/Todo/context/TodoProvider";
// ----------------------------------------------------------------
import "./App.scss";

// =================================================================

export default function App() {
  // -----------------------------------------

  return (
    <>
      <Header></Header>
      <TodoProvider>
        <Main></Main>
        <TodoModals></TodoModals>
      </TodoProvider>
      <Footer></Footer>
      {/* -------------------------- */}
      <Toster></Toster>
    </>
  );
}
