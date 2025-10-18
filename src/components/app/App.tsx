// ----------------------------------------------------------------
import Header from "@components/widgets/Header/Header";
import Footer from "@components/widgets/Footer/Footer";
import TodoWidgets from "@widgets/TodoWidgets/TodoWidgets";
// ----------------------------------------------------------------
import { TodoProvider } from "@entities/Todos/model";
import { ThemeProvider } from "@app/providers/ThemeProvider";
// ----------------------------------------------------------------
import Toaster from "@shared/ui/molecules/Toaster/Toaster";

// ----------------------------------------------------------------
import "./App.scss";
// =================================================================

export default function App() {
  return (
    <>
      <ThemeProvider>
        <Header></Header>
        <TodoProvider>
          <TodoWidgets></TodoWidgets>
        </TodoProvider>
        <Footer></Footer>
        <Toaster></Toaster>
      </ThemeProvider>
    </>
  );
}
