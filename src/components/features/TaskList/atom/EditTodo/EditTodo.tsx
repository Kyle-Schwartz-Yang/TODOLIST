import { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";

interface Props {
  title: string;
  id: string;
  onEdit: (value: string, id: string) => void;
  isEdit: boolean;
  // inputEdit: RefObject<HTMLInputElement | null>;
}

export default function EditTodoItem(props: Props) {
  const [input, setInput] = useState<string>(props.title);
  const inputEdit = useRef<HTMLInputElement>(null);

  const onChangeValue = (value: string) => {
    setInput(value);
  };

  useEffect(() => {
    if (props.isEdit) {
      inputEdit.current?.focus();
    }
  }, [props.isEdit]);

  const validateAndEdit = () => {
    if (input.trim().length === 0) {
      toast.error("ОЙЙ 😬");
      inputEdit.current?.focus();
      return false;
    }
    props.onEdit(input, props.id);
    return true;
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Щоб форма не обробила submit
      event.stopPropagation(); // Щоб не пішло вгору по DOM
      validateAndEdit();
    }
  };

  const handleConfirm = () => {
    validateAndEdit();
  };

  return (
    <li className={`todo__item`}>
      <input
        type="text"
        placeholder="Change value..."
        value={input}
        ref={inputEdit}
        onChange={(e) => onChangeValue(e.target.value)}
        className="todo__input-edit"
        onKeyDown={handleKeyPress}
      />

      <div className="todo__buttons">
        <button
          type="button"
          className="todo__button todo__button--done"
          onClick={handleConfirm}
        >
          Ok
        </button>
      </div>
    </li>
  );
}
