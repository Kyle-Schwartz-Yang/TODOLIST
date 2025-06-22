export interface TodoItem {
  id: string;
  text: string;
  complete: boolean;
  isEdit: boolean;
}

export interface TodoContextType {
  count: number;
  isOpenModal: boolean;
  setIsOpenModal: (value: boolean) => void;
  todos: TodoItem[];
  setTodos: (value: TodoItem[]) => void;
  // setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
  handleDelete: (id: string) => void;
  toggleComplete: (id: string) => void;
  toggleIsEdit: (id: string) => void;
  onEdit: (value: string, id: string) => void;
  openConfirmTaskModal: (id: string) => void;
}
