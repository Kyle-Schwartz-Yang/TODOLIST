// ----------------------------------------------------------------
import Header from "@components/organisms/Header/Header";
import Footer from "@components/organisms/Footer/Footer";
import TodoWidgets from "@widgets/TodoWidgets/TodoWidgets";
// ----------------------------------------------------------------
import { TodoProvider } from "@app/context/todo";
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
