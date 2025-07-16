import styled from "./TodoCount.module.scss";

export default function TodoCount({ title = "Total created", counter = 0 }) {
  return (
    <h2 className={styled.title}>
      {title} <span>{counter}</span> task(s)
    </h2>
  );
}
