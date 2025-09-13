import { v4 as uuidv4 } from "uuid";
import { ACTIONS } from "./TodoProvider";

export const createTodo = (text: string) => {
  return {
    type: ACTIONS.CREATE,
    payload: {
      id: uuidv4(),
      text,
      complete: false,
      isEditing: false,
      isPinned: false,
      color: "default",
    },
  };
};

export const updateTodo = (value: string, id: string) => ({
  type: ACTIONS.UPDATE,
  payload: { id, value },
});

export const toggleEditing = (id: string) => ({
  type: ACTIONS.EDIT,
  payload: id,
});

export const togglePinned = (id: string) => ({
  type: ACTIONS.PINNED,
  payload: id,
});

export const changeColor = (id: string, color: string) => ({
  type: ACTIONS.PALETTE,
  payload: { id, color },
});

export const toggleComplete = (id: string) => ({
  type: ACTIONS.DONE,
  payload: id,
});


export const updFilterColor = (color: string) => ({
    type: ACTIONS.SET_FILTER_COLOR,
    payload: color,
})

