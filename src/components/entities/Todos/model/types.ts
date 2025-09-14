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

export type State = {
    todos: TodoItem[];
    todoToDelete: TodoItem | null;
    filterColor: string;
}
export type Action =
    | { type: typeof ACTIONS.CREATE; payload: TodoItem }
    | { type: typeof ACTIONS.DELETE; payload: string }
    | { type: typeof ACTIONS.SET_TODO_TO_DELETE; payload: TodoItem | null }
    | { type: typeof ACTIONS.DONE; payload: string }
    | { type: typeof ACTIONS.EDIT; payload: string }
    | { type: typeof ACTIONS.PINNED; payload: string }
    | { type: typeof ACTIONS.PINNED_OFF; payload: string }
    | { type: typeof ACTIONS.PALETTE; payload: { id: string; color: string } }
    | { type: typeof ACTIONS.SET_FILTER_COLOR; payload: string }
    | { type: typeof ACTIONS.UPDATE; payload: { id: string; value: string } };

type ProcessedTodos = {
    completedTodos: TodoItem[];
    filterTodos: TodoItem[];
}

export type TodoContextType = {
    todos: TodoItem[];
    todoToDelete: TodoItem | null;
    filterColor: string;
    dispatch: Dispatch<Action>;
    processedTodos: ProcessedTodos;
}




