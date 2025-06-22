interface TodoItem {
  id: string;
  text: string;
  complete: boolean;
  isEdit: boolean;
}

interface AddTodoFormProps {
  todos: TodoItem[];
  setTodos: (todos: TodoItem[]) => void;
}

import React from "react";
//----------------------------------------------
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
//----------------------------------------------
import useControlledInput from "@shared/hooks/useControlledInput/useControlledInput";
//----------------------------------------------

export default function AddTodoForm({ setTodos, todos }: AddTodoFormProps) {
  const input = useControlledInput("");

  const handleCreateTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input.value.trim()) {
      toast.error("⭕ Oh no... input empty", {
        icon: false,
      });
      return;
    }
    // -----------------------------------
    const elementTodo: TodoItem = {
      id: uuidv4(),
      text: input.value,
      complete: false,
      isEdit: false,
    };

    setTodos([elementTodo, ...todos]);
    input.reset();
  };

  return (
    <form className="todo__form" onSubmit={handleCreateTask}>
      <input
        type="text"
        placeholder="Type here..."
        value={input.value}
        onChange={input.onChange}
        className="todo__input"
      />
      <button className="Btn" type="submit">
        <span className="sign">+</span>
        <span className="text">Add</span>
      </button>
    </form>
  );
}

// export default function AddTodoForm({
//   input,
//   handleCreateTask,
//   inputAdd,
//   onChange,
// }: Props) {
//   return (
//     <form action="#" className="todo__form" onSubmit={handleCreateTask}>
//       <input
//         type="text"
//         placeholder="Type here..."
//         ref={inputAdd}
//         value={input}
//         onChange={onChange}
//       />

//       <button className="Btn" type="submit">
//         <span className="sign">+</span>
//         <span className="text">Add</span>
//       </button>
//     </form>
//   );
// }
