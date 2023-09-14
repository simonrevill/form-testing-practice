import { ComponentProps, forwardRef } from "react";

type EmailInputProps = {
  id: string;
} & ComponentProps<"input">;

const EmailInput = forwardRef<HTMLInputElement, EmailInputProps>(
  ({ id, ...rest }, forwardedRef) => (
    <input
      type="email"
      id={id}
      className="block w-full"
      ref={forwardedRef}
      {...rest}
    />
  ),
);

export default EmailInput;
