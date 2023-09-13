import { ComponentProps } from "react";

type ButtonProps = {
  type?: string;
  fullWidth?: boolean;
} & ComponentProps<"button">;

const Button = ({
  children,
  type = "button",
  fullWidth = false,
  ...rest
}: ButtonProps) => (
  <button
    type={type}
    className={`block cursor-pointer ${fullWidth ? "w-full" : ""}`}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
