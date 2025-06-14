import React from "react";

interface Props {
  input: string;
  handleCreateTask: (e: React.FormEvent<HTMLFormElement>) => void;
  onChangeValue: (value: string) => void;
  inputAdd: React.RefObject<HTMLInputElement | null>;
}

export default function AddTodoForm({
  input,
  handleCreateTask,
  inputAdd,
  onChangeValue,
}: Props) {
  return (
    <form action="#" className="todo__form" onSubmit={handleCreateTask}>
      <input
        type="text"
        placeholder="Type here..."
        ref={inputAdd}
        value={input}
        onChange={(e) => onChangeValue(e.target.value)}
      />

      <button className="Btn" type="submit">
        <span className="sign">+</span>
        <span className="text">Add</span>
      </button>
    </form>
  );
}
