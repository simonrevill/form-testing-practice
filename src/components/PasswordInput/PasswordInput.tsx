import { ComponentProps, forwardRef } from "react";

type PasswordInputProps = {
  id: string;
} & ComponentProps<"input">;

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ id, ...rest }) => (
    <input type="password" id={id} className="block w-full" {...rest} />
  ),
);

export default PasswordInput;
