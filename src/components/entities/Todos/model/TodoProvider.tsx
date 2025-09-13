import {
    useState,
    ReactNode,
    useMemo,
    createContext,
    useContext,
    useReducer, useEffect,
} from "react";

import { State, Action, TodoItem, TodoContextType } from "@entities/Todos/model/types";

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

const initialState: State = {
    todos: [],
    filterColor: "default",
};


const TodosContext = createContext<TodoContextType | undefined>(undefined);

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

      default: {
          // const _exhaustiveCheck: never = action;
          return state;
      }

  }
}


function init(initial: State): State {
    const todosLocal = localStorage.getItem('todos');
    const filterLocal = localStorage.getItem('filter');
    return {
        ...initial,
        todos: todosLocal ? JSON.parse(todosLocal) : initial.todos,
        filterColor: filterLocal ? JSON.parse(filterLocal) : initial.filterColor
    }
}

export function TodoProvider({ children }: { children: ReactNode; }) {
  const [{ todos, filterColor }, dispatch] = useReducer(reducer, initialState, init);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [taskIdToDelete, setTaskIdToDelete] = useState<TodoItem | null>(null);

  console.log(taskIdToDelete);

  useEffect(() => {
      // localStorage.clear()
      localStorage.setItem('todos', JSON.stringify(todos))
      localStorage.setItem('filter', JSON.stringify(filterColor))
  }, [todos, filterColor])

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


  const openConfirmTaskModal = (todo: TodoItem) => {
    console.log("GO");
    setTaskIdToDelete(todo);
    setIsOpenModal(true);
  };

  // const deleteTodo = () => {
  //   console.log("GO 2");
  //   dispatch({ type: ACTIONS.DELETE, payload: taskIdToDelete.id });
  //
  //   setTaskIdToDelete(null);
  //   setIsOpenModal(false);
  //   toast.info("DELETE!");
  // };



    const processedTodos = useMemo(() => {
        const completedTodos = todos.filter(item => item.complete);
        const activeTodos = todos.filter(item => !item.complete);
        const pinnedTodos = [...activeTodos].sort(
            (a, b) => Number(b.isPinned) - Number(a.isPinned)
        );
        const filterTodos = filterColor === 'default'
            ? pinnedTodos
            : pinnedTodos.filter(item => item.color === filterColor);

        return { completedTodos, filterTodos };
    }, [todos, filterColor]);



  const value: TodoContextType = {
    todos,
    filterColor,
    dispatch,
    processedTodos,

    // deleteTodo,
    isOpenModal,
    setIsOpenModal,
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
