import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import styled from "./Modal.module.scss";
export default class Modal extends React.Component {
    render() {
        return (_jsx("div", { className: styled.modal, onClick: this.props.onClose, children: _jsxs("div", { className: styled.modalContent, onClick: (e) => e.stopPropagation(), children: [_jsx("button", { className: styled.modalCross, type: "button", onClick: this.props.onClose, children: "\u274C" }), this.props.children] }) }));
    }
}
