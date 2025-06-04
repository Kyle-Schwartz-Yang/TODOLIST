import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Portal = ({ children }) => {
  const [node] = useState(() => document.createElement("div"));

  useEffect(() => {
    document.body.appendChild(node);
    return () => {
      document.body.removeChild(node);
    };
  }, [node]);

  return ReactDOM.createPortal(children, node);
};

export default Portal;
