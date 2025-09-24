import styled from "./TodoFilter.module.scss";

type ColorFilterProps = {
  activeColor: string;
  onSelect: (color: string) => void;
};

export default function TodoFilter({
  activeColor,
  onSelect,
}: ColorFilterProps) {
  const COLORS = ["default", "red", "yellow", "blue", "purple"] as const;

  return (
    <div className={styled.filter}>
      {COLORS.map((c) => (
        <button
          key={c}
          className={`${styled.filterBtn} ${
            activeColor === c ? styled.filterBtnActive : ""
          }`}
          onClick={() => onSelect(c)}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
