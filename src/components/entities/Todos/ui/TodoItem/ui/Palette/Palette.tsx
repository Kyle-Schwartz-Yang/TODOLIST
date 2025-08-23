import styled from "./Palette.module.scss";

interface Props {
  onClick: (str: string) => void;
  color: string;
}

const COLORS = ["default", "red", "yellow", "blue", "purple"];

export default function Palette({ onClick, color }: Props) {
  return (
    <div className={styled.palette}>
      {COLORS.map((c) => (
        <button
          key={c}
          className={`
            ${styled.btn} 
            ${styled[c]} 
            ${color === c ? styled.active : " "}
          `}
          onClick={() => onClick(c)}
        />
      ))}
    </div>
  );
}
