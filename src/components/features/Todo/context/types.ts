export interface TodoItem {
  id: string;
  text: string;
  complete: boolean;
  isEdit: boolean;
}

export interface TodoContextType {
  todos: TodoItem[];
  handleDelete: (id: string) => void;
  toggleComplete: (id: string) => void;
  toggleIsEdit: (id: string) => void;
  onEdit: (value: string, id: string) => void;
  openConfirmTaskModal: (id: string) => void;
}
