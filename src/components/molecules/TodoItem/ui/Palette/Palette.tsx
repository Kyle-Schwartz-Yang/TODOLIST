import styled from "./Palette.module.scss";

interface Props {
  id: string;
  onClick: (id: string, str: string) => void;
  color: string;
}

const COLORS = ["default", "red", "yellow", "blue", "purple"] as const;

export default function Palette({ id, onClick, color }: Props) {
  return (
    <div className={styled.palette}>
      {COLORS.map((c) => (
        <button
          key={c}
          className={`
            ${styled.paletteButton} 
            ${styled[c]} 
            ${color === c ? styled.active : " "}
          `}
          onClick={() => onClick(id, c)}
        />
      ))}
    </div>
  );
}
