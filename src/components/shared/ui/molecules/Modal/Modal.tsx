import React from "react";

import styled from "./Modal.module.scss";

interface ModalProps {
  children?: React.ReactNode;
  onClose?: () => void;
}

export  default  function Modal ({children, onClose}: ModalProps) {
    return (
        <div className={styled.modal} onClick={onClose}>
            <div
                className={styled.modalOverlay}
                onClick={(e) =>
                    e.stopPropagation()}
            >
                <div className={styled.modalContent}>
                    {children}
                </div>
            </div>
        </div>
    )
}

