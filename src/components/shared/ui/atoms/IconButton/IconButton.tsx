import { ReactNode, ButtonHTMLAttributes } from "react";
import styled from "./IconButton.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  children: ReactNode;
  className?: string;
}

export default function IconButton({
  onClick,
  children,
  className,
  ...props
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      {...props}
      className={`${styled.button} ${className}`}
    >
      {children}
    </button>
  );
}
