import  { Dispatch } from "react";
import { ACTIONS } from "@entities/Todos/model/TodoProvider";

export interface TodoItem {
  id: string;
  text: string;
  complete: boolean;
  isEditing: boolean;
  isPinned: boolean;
  color: string;
}

export type Action =
    | { type: typeof ACTIONS.CREATE; payload: TodoItem }
    | { type: typeof ACTIONS.DELETE; payload: string }
    | { type: typeof ACTIONS.DONE; payload: string }
    | { type: typeof ACTIONS.EDIT; payload: string }
    | { type: typeof ACTIONS.PINNED; payload: string }
    | { type: typeof ACTIONS.PALETTE; payload: { id: string; color: string } }
    | { type: typeof ACTIONS.SET_FILTER_COLOR; payload: string }
    | { type: typeof ACTIONS.UPDATE; payload: { id: string; value: string } };

export type State = {
    todos: TodoItem[];
    filterColor: string;
}

interface ProcessedTodos {
    completedTodos: TodoItem[];
    // pinnedTodos: TodoItem[];
    filterTodos: TodoItem[];
}

export interface TodoContextType {
    todos: TodoItem[];
    dispatch: Dispatch<Action>;
    processedTodos: ProcessedTodos;
    // deleteTodo: () => void;

  //----------------------------------------------------------

    isOpenModal: boolean;
    setIsOpenModal: (value: boolean) => void;
    openConfirmTaskModal: (todo: TodoItem) => void;


}

//------------------------------------------------------------


