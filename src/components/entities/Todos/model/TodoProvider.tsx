import {
  useState,
  useEffect,
  createContext,
  useContext,
  useReducer,
} from "react";

import { toast } from "react-toastify";
import { State, TodoItem, TodoContextType } from "@entities/Todos/model/types";
import useConfetti from "@shared/hooks/useConfetti/useConfetti";

interface TodoProviderProps {
  children: React.ReactNode;
}

const TodosContext = createContext<TodoContextType | null>(null);

export const ACTIONS = {
  CREATE: "CREATE_TODO",
  DELETE: "DELETE_TODO",
  DONE: "TOGGLE_COMPLETE",
  EDIT: "TOGGLE_EDIT",
  UPDATE: "UPDATE_TODO",
  PINNED: "TOGGLE_PINNED",
  PALETTE: "SET_COLOR",
  SET_FILTER_COLOR: "SET_FILTER_COLOR",
} as const;

// export const ACTIONS = {
//   CREATE_TODO: "CREATE_TODO",
//   DELETE_TODO: "DELETE_TODO",
//   TOGGLE_COMPLETE: "TOGGLE_COMPLETE",
//   TOGGLE_EDIT: "TOGGLE_EDIT",
//   UPDATE_TODO: "UPDATE_TODO",
//   TOGGLE_PINNED: "TOGGLE_PINNED",
//   SET_COLOR: "SET_COLOR",
//   SET_FILTER_COLOR: "SET_FILTER_COLOR",
// } as const;

type Action =
  | { type: typeof ACTIONS.CREATE; payload: TodoItem }
  | { type: typeof ACTIONS.DELETE; payload: string }
  | { type: typeof ACTIONS.DONE; payload: string }
  | { type: typeof ACTIONS.EDIT; payload: string }
  | { type: typeof ACTIONS.PINNED; payload: string }
  | { type: typeof ACTIONS.PALETTE; payload: { id: string; color: string } }
  | { type: typeof ACTIONS.SET_FILTER_COLOR; payload: string }
  | { type: typeof ACTIONS.UPDATE; payload: { id: string; value: string } };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ACTIONS.CREATE:
      return { ...state, todos: [action.payload, ...state.todos] };
    case ACTIONS.DELETE:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    case ACTIONS.DONE:
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload
            ? { ...item, complete: !item.complete }
            : item
        ),
      };
    case ACTIONS.EDIT:
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload
            ? { ...item, isEditing: !item.isEditing }
            : item
        ),
      };
    case ACTIONS.PINNED:
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload
            ? { ...item, isPinned: !item.isPinned }
            : item
        ),
      };
    case ACTIONS.UPDATE:
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload.id
            ? { ...item, text: action.payload.value, isEditing: false }
            : item
        ),
      };
    case ACTIONS.PALETTE:
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload.id
            ? { ...item, color: action.payload.color }
            : item
        ),
      };
    case ACTIONS.SET_FILTER_COLOR:
      return { ...state, filterColor: action.payload };

    default:
      return state;
  }
}

const initialState: State = {
  todos: [],
  filterColor: "ALL",
};

export function TodoProvider({ children }: TodoProviderProps) {
  const [{ todos }, dispatch] = useReducer(reducer, initialState);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [taskIdToDelete, setTaskIdToDelete] = useState("");

  const { launchConfetti } = useConfetti();

  // useEffect(() => {
  //   const handleKeyDown = (event: KeyboardEvent) => {
  //     if (event.key === "Escape") {
  //       if (isOpenModal) {
  //         setIsOpenModal(false);
  //       } else {
  //         setTodos((prev) => prev.slice(1));
  //       }
  //     }
  //   };

  //   document.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, [isOpenModal]);

  // useEffect(() => {
  //   const saved = localStorage.getItem("todos");
  //   if (saved) {
  //     const stringTransforinArray = JSON.parse(saved);
  //     setTodos(stringTransforinArray);
  //   }
  // }, []);

  // useEffect(() => {
  //   const arrayTransforminString = JSON.stringify(todos);
  //   localStorage.setItem("todos", arrayTransforminString);
  // }, [todos]);

  const openConfirmTaskModal = (id: string) => {
    setTaskIdToDelete(id);
    setIsOpenModal(true);
  };

  const deleteTodo = () => {
    dispatch({ type: ACTIONS.DELETE, payload: taskIdToDelete });

    setTaskIdToDelete("");
    setIsOpenModal(false);
    toast.info("DELETE!");
  };

  const toggleComplete = (id: string) => {
    let shouldShowToast = false;
    let shouldLaunchConfetti = false;

    dispatch({ type: ACTIONS.DONE, payload: id });

    // if (updatedTodos.every((item) => item.complete)) {
    //   shouldLaunchConfetti = true;
    // }

    // if (shouldShowToast) {
    //   toast.success("DONE!");
    // }

    // if (shouldLaunchConfetti) launchConfetti();
  };

  // ???????????????????????????????????
  // isEditinging, editMode,

  // UPDATE EDIT  - onEditing updateText

  // ???????????????????????????????????

  const completedTodos = todos.filter((todo) => todo.complete);

  const uncompletedTodos = todos
    .filter((todo) => !todo.complete)
    .sort((a, b) => {
      if (a.isPinned === b.isPinned) return 0;
      return a.isPinned ? -1 : 1;
    });

  const value: TodoContextType = {
    todos,
    dispatch,

    toggleComplete,

    deleteTodo,

    //-----------------------------------------

    isOpenModal,
    setIsOpenModal,

    uncompletedTodos,
    completedTodos,

    openConfirmTaskModal,
  };

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
}

export function useTodos() {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error("Ops, problems with TodosContext");
  }
  return context;
}
