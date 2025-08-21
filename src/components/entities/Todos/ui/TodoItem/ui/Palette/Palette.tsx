import styled from "./Palette.module.scss";

export default function Palette() {
  return (
    <div className={styled.palette}>
      <button className={`${styled.btn} ${styled.default}`}></button>
      <button className={`${styled.btn} ${styled.red}`}></button>
      <button className={`${styled.btn} ${styled.yellow}`}></button>
      <button className={`${styled.btn} ${styled.blue}`}></button>
      <button className={`${styled.btn} ${styled.purple}`}></button>
    </div>
  );
}
