import { IconProps } from "@/types";

export const FlagIdIcon = ({ size = 5, ...props }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 513 342"
      className={`w-${size} h-${size}`}
      {...props}
    >
      <path fill="#FFF" d="M0 0h513v342H0z"></path>
      <path fill="#E00" d="M0 0h513v171H0z"></path>
    </svg>
  );
};
