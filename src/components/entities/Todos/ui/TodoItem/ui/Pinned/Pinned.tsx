import styled from "./Pinned.module.scss";

interface Props {
  pinned: boolean;
  onClick?: () => void;
  isAnimating: boolean;
}

export default function Pinned({ pinned, onClick, isAnimating }: Props) {
  return (
    <div className={styled.pinned} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 75 100"
        className={`${styled.pin} ${isAnimating ? styled.animate : ""} ${
          pinned ? styled.active : ""
        }`}
      >
        <line
          strokeWidth="10"
          stroke="white"
          y2="100"
          x2="37"
          y1="64"
          x1="37"
        ></line>
        <path
          strokeWidth="10"
          stroke="white"
          d="M16.5 36V4.5H58.5V36V53.75V54.9752L59.1862 55.9903L66.9674 67.5H8.03256L15.8138 55.9903L16.5 54.9752V53.75V36Z"
        ></path>
      </svg>
    </div>
  );
}

const PinIcon = ({ isAnimating, pinned }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      viewBox="0 0 75 100"
      className={`pin ${isAnimating ? "animate" : ""} ${
        pinned ? "active" : ""
      }`}
    >
      <line
        strokeWidth="10"
        stroke="white"
        y2="100"
        x2="37"
        y1="64"
        x1="37"
      ></line>
      <path
        strokeWidth="10"
        stroke="white"
        d="M16.5 36V4.5H58.5V36V53.75V54.9752L59.1862 55.9903L66.9674 67.5H8.03256L15.8138 55.9903L16.5 54.9752V53.75V36Z"
      ></path>
    </svg>
  );
};
