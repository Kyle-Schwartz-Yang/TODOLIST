import styled from "./AddButton.module.scss";

export default function AddButton() {
  return (
    <button className={styled.button} type="submit">
      <span className={styled.buttonSign}>+</span>
      <span className={styled.buttonText}>Add</span>
    </button>
  );
}
