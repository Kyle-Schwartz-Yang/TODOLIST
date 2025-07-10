import useTodo from "@features/todos/context/useTodo";
import styled from "./TodoCount.module.scss";

export default function TodoCount() {
  const { count } = useTodo();

  return (
    <h1 className={styled.title}>
      You completed <span>{count}</span> task(s)
    </h1>
  );
}
