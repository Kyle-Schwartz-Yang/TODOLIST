// ----------------------------------------------------------------
import Header from "@components/widgets/Header/Header";
import Footer from "@components/widgets/Footer/Footer";
import TodoWidgets from "@widgets/TodoWidgets/TodoWidgets";
import TodoConfirmModal from "@features/TodoConfirmModal/TodoConfirmModal";

import Toaster from "@shared/ui/molecules/Toaster/Toaster";
// ----------------------------------------------------------------
import { TodoProvider } from "@components/entities/Todos/model";

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
      <Toaster></Toaster>
    </>
  );
}
