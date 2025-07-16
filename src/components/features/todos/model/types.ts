export interface TodoItem {
  id: string;
  text: string;
  complete: boolean;
  isEdit: boolean;
  pinned: boolean;
}

export interface TodoContextType {
  count: number;
  isOpenModal: boolean;
  setIsOpenModal: (value: boolean) => void;
  todos: TodoItem[];
  completedTodos: TodoItem[];
  uncompletedTodos: TodoItem[];
  setTodos: (value: TodoItem[]) => void;
  // setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
  handleDelete: () => void;
  toggleComplete: (id: string) => void;
  toggleIsEdit: (id: string) => void;
  onEdit: (value: string, id: string) => void;
  onChangePinned: (id: TodoItem["id"]) => void; // Така типізація краще ?
  openConfirmTaskModal: (id: string) => void;
}
