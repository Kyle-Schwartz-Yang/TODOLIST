export interface TodoItem {
  id: string;
  text: string;
  complete: boolean;
  isEditing: boolean;
  isPinned: boolean;
}

// export interface Todo {
//   id: string;
//   text: string;
//   isComplete: boolean;
//   isEditinging: boolean;
//   isPinned: boolean;
//   palette: string;
// }

export interface TodoContextType {
  todos: TodoItem[];
  dispatch: React.Dispatch<any>;

  toggleComplete: (id: string) => void;

  deleteTodo: () => void;

  //----------------------------------------------------------

  isOpenModal: boolean;
  setIsOpenModal: (value: boolean) => void;

  completedTodos: TodoItem[];
  uncompletedTodos: TodoItem[];

  openConfirmTaskModal: (id: string) => void;
}

// AI GO !!!
//------------------------------------------------------------

export interface State {
  todos: TodoItem[];
  filterColor: string;
}
