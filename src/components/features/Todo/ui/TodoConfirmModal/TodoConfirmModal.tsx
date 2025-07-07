import { useTodo } from "../context/useTodo";

import Portal from "@shared/kit/templates/portal/Portal";
import Modal from "@shared/kit/molecules/modal/Modal";

import styled from "./TodoConfirmModal.module.scss";

export const TodoConfirmModal = () => {
  const { isOpenModal, setIsOpenModal, handleDelete } = useTodo();

  return (
    <Portal>
      {isOpenModal && (
        <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
          <div className={styled.box}>
            <p className={styled.text}>Are you sure you want to delete ?</p>
            <div className={styled.buttons}>
              <button className={styled.buttonsDelete} onClick={handleDelete}>
                Yes 🧺
              </button>
              <button
                className={styled.buttonsCancel}
                onClick={() => setIsOpenModal(false)}
              >
                No
              </button>
            </div>
          </div>
        </Modal>
      )}
    </Portal>
  );
};
