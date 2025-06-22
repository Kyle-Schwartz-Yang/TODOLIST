import ConfirmTaskModal from "@features/ConfirmTaskModal/ConfirmTaskModal";
import Portal from "@shared/kit/templates/portal/Portal";
import { useTodo } from "../Todo/context/useTodo";

export const TodoModals = () => {
  const { isOpenModal, setIsOpenModal, handleDelete } = useTodo();

  return (
    <Portal>
      {isOpenModal && (
        <ConfirmTaskModal
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          handleDelete={handleDelete}
        />
      )}
    </Portal>
  );
};
