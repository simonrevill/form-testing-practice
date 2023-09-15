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
    className={`block cursor-pointer ${
      fullWidth ? "w-full" : ""
    } rounded bg-blue-600 py-2 text-white transition-colors duration-200 ease-in-out hover:bg-blue-700 active:bg-blue-800`}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
