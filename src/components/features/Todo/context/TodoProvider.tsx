import React from "react";
import { TodoContext } from "./TodoContext";

interface TodoProviderProps {
  children: React.ReactNode;
}

export default function TodoProvider({ children }: TodoProviderProps) {
  return <TodoContext.Provider value={null}>{children}</TodoContext.Provider>;
}
