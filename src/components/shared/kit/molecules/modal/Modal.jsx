import React from "react";
import ReactDom from "react-dom";

export default class Modal extends React.Component {
  render() {
    return ReactDom.createPortal(
      <div className="modal">
        <div className="modal-content">{this.props.children}</div>
      </div>,
      document.getElementById("modal-root")
    );
  }
}
