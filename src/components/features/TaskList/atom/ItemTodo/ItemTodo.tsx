import Checklist from "@shared/kit/atoms/CheckList/CheckList";

interface ItemTodoProps {
  title: string;
  id: string;
  complete: boolean;
  handleDelete: (id: string) => void;
  toggleComplete: (id: string) => void;
  toggleIsEdit: (id: string) => void;
}

export default function ItemTodo(props: ItemTodoProps) {
  return (
    <li className={`todo__item ${props.complete ? "done" : ""}`}>
      {/* <div
        className="todo__task-title"
        onClick={() => props.toggleComplete(props.id)}
      >
        {props.title}
      </div> */}

      <Checklist
        title={props.title}
        id={props.id}
        complete={props.complete}
        toggleComplete={props.toggleComplete}
      ></Checklist>

      <div className="todo__buttons">
        {/* <button
          type="button"
          className="todo__button todo__button--done"
          onClick={() => props.toggleIsEdit(props.id)}
        >
          Edit
        </button> */}

        <button
          className="editBtn"
          type="button"
          onClick={() => props.toggleIsEdit(props.id)}
          aria-label="Edit Task"
        >
          <svg height="1em" viewBox="0 0 512 512">
            <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
          </svg>
        </button>

        {/* <button
          type="button"
          className="todo__button todo__button--del"
          onClick={() => props.handleDelete(props.id)}
        >
          Delete
        </button> */}

        <button
          aria-label="Delete item"
          className="delete-button  "
          onClick={() => props.handleDelete(props.id)}
        >
          <svg
            className="trash-svg"
            viewBox="0 -10 64 74"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="trash-can">
              <rect
                x="16"
                y="24"
                width="32"
                height="30"
                rx="3"
                ry="3"
                fill="#e74c3c"
              ></rect>

              <g style={{ transformOrigin: "12 18" }} id="lid-group">
                <rect
                  x="12"
                  y="12"
                  width="40"
                  height="6"
                  rx="2"
                  ry="2"
                  fill="#c0392b"
                ></rect>
                <rect
                  x="26"
                  y="8"
                  width="12"
                  height="4"
                  rx="2"
                  ry="2"
                  fill="#c0392b"
                ></rect>
              </g>
            </g>
          </svg>
        </button>
      </div>
    </li>
  );
}
