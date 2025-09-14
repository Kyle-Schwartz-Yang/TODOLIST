

import { useTodos } from "@entities/Todos/model";
import { ImCross } from "react-icons/im";
import { Portal } from "@shared/ui";
import Modal from "@shared/ui/molecules/modal/Modal";

import styled from "./TodoConfirmModal.module.scss";
import { ACTIONS } from "@entities/Todos/model/TodoProvider";


export default function TodoConfirmModal() {
  const { isOpenModal, setIsOpenModal, closeConfirmModal, todoToDelete, dispatch } = useTodos();


    const onDeleteTodo = () => {
        if (!todoToDelete) return;
        dispatch({ type: ACTIONS.DELETE, payload: todoToDelete.id });
        closeConfirmModal();
    };

  return (
    <Portal>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <div className={styled.box}>
              <button type='button' aria-label='cross modal' className={styled.cross}
                   onClick={() => setIsOpenModal(false)}
              >
                  <ImCross></ImCross>
              </button>

              <div className={styled.body}>
                  <h5 className={styled.title}>Confirm delete</h5>
                  <p className={styled.text}>Are you sure you want to delete ?</p>
              </div>
            <div className={styled.buttons}>
              <button
                  className={styled.buttonsDelete}
                  onClick={onDeleteTodo}
              >
                Delete
              </button>
              <button
                className={styled.buttonsCancel}
                onClick={() => setIsOpenModal(false)}
              >
                Cansel
              </button>
            </div>
          </div>
        </Modal>
      )}
    </Portal>
  );
}
