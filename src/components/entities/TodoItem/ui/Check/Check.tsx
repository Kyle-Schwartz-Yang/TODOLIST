import style from "./Check.module.scss";

interface Props {
  title: string;
  id: string;
  complete: boolean;
  toggleComplete: (id: string) => void;
}

export default function Check({ title, id, complete, toggleComplete }: Props) {
  return (
    <div className="checkbox">
      <label className={style.label} htmlFor={id}>
        <input
          type="checkbox"
          id={id}
          checked={complete}
          onChange={() => toggleComplete(id)}
        />
        <svg viewBox="0 0 64 64" height="2em" width="2em">
          <path
            d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
            pathLength="575.0541381835938"
            className={style.path}
          ></path>
        </svg>
        {title}
      </label>
    </div>
  );
}
