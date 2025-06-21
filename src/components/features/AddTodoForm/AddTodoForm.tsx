interface Props {
  input: string;
  handleCreateTask: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputAdd: React.RefObject<HTMLInputElement | null>;
}

export default function AddTodoForm({
  input,
  onChange,
  inputAdd,
  handleCreateTask,
}: Props) {
  return (
    <form className="todo__form" onSubmit={handleCreateTask}>
      <input
        type="text"
        placeholder="Type here..."
        ref={inputAdd}
        value={input}
        onChange={onChange}
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
