import React from "react";

interface CreateTodoFormContextType {
  input: string;
  handleCreateTask: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputAdd: React.RefObject<HTMLInputElement | null>;
}

const defaultContextValue: CreateTodoFormContextType = {
  input: "",
  handleCreateTask: () => {},
  onChange: () => {},
  inputAdd: { current: null },
};

const CreateTodoFormContext =
  React.createContext<CreateTodoFormContextType>(defaultContextValue);

export default CreateTodoFormContext;
