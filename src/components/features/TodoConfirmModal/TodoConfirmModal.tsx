import useTodo from "@entities/Todos/model/useTodo";

import Portal from "@shared/ui/templates/portal/Portal";
import Modal from "@shared/ui/molecules/modal/Modal";

import styled from "./TodoConfirmModal.module.scss";

export default function TodoConfirmModal() {
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
}
