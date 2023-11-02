import { ArrowProps } from "./Arrow.types";

export const Arrow: React.FC<ArrowProps> = (props) => {
  const { color, orientation } = props;
  return (
    <svg
      width="30"
      height="25"
      className={orientation === "inverted" ? "rotate-180" : "-rotate-90"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 4V20M12 4L8 8M12 4L16 8"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
