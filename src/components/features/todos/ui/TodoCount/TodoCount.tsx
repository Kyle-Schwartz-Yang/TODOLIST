import useTodo from "@features/todos/context/useTodo";

export default function TodoCount() {
  const { count } = useTodo();

  return (
    <h1 className="todo__title">
      You completed <span>{count}</span> task(s)
    </h1>
  );
}
