// ----------------------------------------------------------------
import Header from "@components/widgets/Header/Header";
import Footer from "@components/widgets/Footer/Footer";
import TodoWidgets from "@widgets/TodoWidgets/TodoWidgets";
import TodoConfirmModal from "@features/TodoConfirmModal/TodoConfirmModal";

import Toster from "@shared/ui/molecules/toster/Toster";
// ----------------------------------------------------------------
import TodoProvider from "@components/entities/Todos/model/TodoProvider";

// ----------------------------------------------------------------
import "./App.scss";
// =================================================================

export default function App() {
  // -----------------------------------------

  return (
    <>
      <Header></Header>
      <TodoProvider>
        <TodoWidgets></TodoWidgets>
        <TodoConfirmModal></TodoConfirmModal>
      </TodoProvider>
      <Footer></Footer>

      {/* -------------------------- */}
      <Toster></Toster>
    </>
  );
}
