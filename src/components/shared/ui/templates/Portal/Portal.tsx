import ReactDOM from "react-dom";
import  { useEffect, useState, ReactNode } from "react";

export  default function Portal ({ children }: { children: ReactNode })  {

  const [node] = useState(() => document.createElement("div"));

  useEffect(() => {
    document.body.appendChild(node);
    return () => {
      document.body.removeChild(node);
    };
  }, [node]);

  return ReactDOM.createPortal(children, node);
};


