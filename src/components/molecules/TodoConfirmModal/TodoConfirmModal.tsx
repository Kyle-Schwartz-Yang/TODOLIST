import {ImCross} from "react-icons/im";
import {Portal, Modal} from "@shared/ui";
import styled from "./TodoConfirmModal.module.scss";


type Props = {
    onConfirm: () => void;
    onCansel: () => void;
}

export default function TodoConfirmModal({onConfirm, onCansel}: Props) {

    return (
        <Portal>
            <Modal onClose={onCansel}>
                <div className={styled.box}>
                    <button type='button' aria-label='cross modal' className={styled.cross}
                            onClick={onCansel}
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
                            onClick={onConfirm}
                        >
                            Delete
                        </button>
                        <button
                            className={styled.buttonsCancel}
                            onClick={onCansel}
                        >
                            Cansel
                        </button>
                    </div>
                </div>
            </Modal>

        </Portal>
    );
}
