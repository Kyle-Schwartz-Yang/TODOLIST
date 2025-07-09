// ----------------------------------------------------------------
import Header from "@components/widgets/Header/Header";
import Footer from "@components/widgets/Footer/Footer";
import TodoBoard from "@widgets/TodoBoard/TodoBoard";
import TodoConfirmModal from "@features/TodoConfirmModal/TodoConfirmModal";

import Toster from "@shared/ui/molecules/toster/Toster";
// ----------------------------------------------------------------
import TodoProvider from "@features/todos/context/TodoProvider";

// ----------------------------------------------------------------
import "./App.scss";
// =================================================================

export default function App() {
  // -----------------------------------------

  return (
    <>
      <Header></Header>
      <TodoProvider>
        <TodoBoard></TodoBoard>
        <TodoConfirmModal></TodoConfirmModal>
      </TodoProvider>
      <Footer></Footer>
      {/* -------------------------- */}
      <Toster></Toster>
    </>
  );
}
