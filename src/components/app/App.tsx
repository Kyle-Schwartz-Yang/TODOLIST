// ----------------------------------------------------------------
import Header from "@components/widgets/Header/Header";
import Footer from "@components/widgets/Footer/Footer";
import TodoWidgets from "@widgets/TodoWidgets/TodoWidgets";


import Toaster from "@shared/ui/molecules/Toaster/Toaster";
// ----------------------------------------------------------------
import {TodoProvider, } from "@components/entities/Todos/model";

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
      </TodoProvider>
      <Footer></Footer>
      <Toaster></Toaster>
    </>
  );
}
