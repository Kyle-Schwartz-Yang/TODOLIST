import styled from "./TodoCount.module.scss";

interface TodoCountProps {
  title?: string;
  counter?: number;
  isOpen: boolean;
  onClick: () => void;
}

export default function TodoCount({
  title = "Total created",
  counter = 0,
  isOpen,
  onClick,
}: TodoCountProps) {
  return (
    <h2 className={styled.title} onClick={onClick}>
      {title} <span>{counter}</span> task(s){" "}
      <span>{isOpen ? "OPEN" : "CLOSE"}</span>
    </h2>
  );
}
