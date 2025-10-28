import React, {useEffect} from "react";

import styled from "./Modal.module.scss";

interface ModalProps {
    children?: React.ReactNode;
    onClose: () => void;
}

export default function Modal({children, onClose}: ModalProps) {

    useEffect(() => {
        // if (!isOpen) return;
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollbarWidth}px`;

        return () => {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        };
    }, []);


    useEffect(() => {
        // if (!isOpen) return;
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }

        window.addEventListener('keydown', handleEsc)

        return () => window.removeEventListener('keydown', handleEsc)

    }, [onClose]);


    // if(!isOpen) return  null;


    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        onClose();
    };

    const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    return (
        <div className={styled.modal}>
            <div
                className={styled.modalOverlay}
                onClick={handleOverlayClick}
            >
                <div className={styled.modalContent} onClick={handleContentClick}>
                    {children}
                </div>
            </div>
        </div>
    )
}

