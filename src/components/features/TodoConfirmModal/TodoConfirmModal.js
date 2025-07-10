import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import useTodo from "@features/todos/context/useTodo";
import Portal from "@shared/ui/templates/portal/Portal";
import Modal from "@shared/ui/molecules/modal/Modal";
import styled from "./TodoConfirmModal.module.scss";
export default function TodoConfirmModal() {
    const { isOpenModal, setIsOpenModal, handleDelete } = useTodo();
    return (_jsx(Portal, { children: isOpenModal && (_jsx(Modal, { isOpen: isOpenModal, onClose: () => setIsOpenModal(false), children: _jsxs("div", { className: styled.box, children: [_jsx("p", { className: styled.text, children: "Are you sure you want to delete ?" }), _jsxs("div", { className: styled.buttons, children: [_jsx("button", { className: styled.buttonsDelete, onClick: handleDelete, children: "Yes \uD83E\uDDFA" }), _jsx("button", { className: styled.buttonsCancel, onClick: () => setIsOpenModal(false), children: "No" })] })] }) })) }));
}
