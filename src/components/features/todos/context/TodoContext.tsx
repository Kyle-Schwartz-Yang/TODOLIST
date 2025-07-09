import { createContext } from "react";
import { TodoContextType } from "@features/todos/model/types";

export const TodoContext = createContext<TodoContextType | null>(null);
