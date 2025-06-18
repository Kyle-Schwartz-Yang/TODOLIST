import Modal from "@shared/kit/molecules/modal/Modal";

import styled from "./ConfirmTaskModal.module.scss";

interface Props {
  isOpenModal: boolean;
  setIsOpenModal: (isOpenModal: boolean) => void;
  handleDelete: () => void;
}

export default function ConfirmTaskModal({
  isOpenModal,
  setIsOpenModal,
  handleDelete,
}: Props) {
  return (
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
  );
}
