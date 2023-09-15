import { ComponentProps, forwardRef } from "react";

type PasswordInputProps = {
  id: string;
} & ComponentProps<"input">;

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ id, ...rest }, forwardedRef) => (
    <input
      type="password"
      id={id}
      className="block w-full rounded"
      ref={forwardedRef}
      {...rest}
    />
  ),
);

export default PasswordInput;
