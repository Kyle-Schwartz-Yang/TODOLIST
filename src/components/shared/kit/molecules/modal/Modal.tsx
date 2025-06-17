import React from "react";

import styled from "./Modal.module.scss";

interface ModalProps {
  children?: React.ReactNode;
  onClose?: () => void;
  isOpen: boolean;
}

export default class Modal extends React.Component<ModalProps> {
  render() {
    return (
      <div className={styled.modal} onClick={this.props.onClose}>
        <div
          className={styled.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className={styled.modalCross}
            type="button"
            onClick={this.props.onClose}
          >
            X
          </button>
          {this.props.children}
        </div>
      </div>
    );
  }
}
