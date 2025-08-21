import styled from "./Confirm.module.scss";

interface Props {
  handleConfirm: () => void;
}

export default function Confirm({ handleConfirm }: Props) {
  return (
    <button className={styled.confirm} type="button" onClick={handleConfirm}>
      <span className={styled.sign}>✔</span>
    </button>
  );
}
