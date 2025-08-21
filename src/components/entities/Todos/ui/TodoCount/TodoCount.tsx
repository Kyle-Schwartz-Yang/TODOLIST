import styled from "./TodoCount.module.scss";

export default function TodoCount({
  title = "Total created",
  counter = 0,
  onClick,
}) {
  return (
    <h2 className={styled.title} onClick={onClick}>
      {title} <span>{counter}</span> task(s)
    </h2>
  );
}
