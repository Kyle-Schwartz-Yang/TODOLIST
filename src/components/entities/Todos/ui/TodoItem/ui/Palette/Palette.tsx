import styled from "./Palette.module.scss";

const COLORS = ["default", "red", "yellow", "blue", "purple"] as const;

interface Props {
  id: string;
  onClick: (id: string, str: string) => void;
  color: string;
}

export default function Palette({ id, onClick, color }: Props) {
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
          onClick={() => onClick(id, c)}
        />
      ))}
    </div>
  );
}
