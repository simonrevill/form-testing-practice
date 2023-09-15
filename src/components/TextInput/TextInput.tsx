import { ComponentProps, forwardRef } from "react";

type TextInputProps = {
  id: string;
} & ComponentProps<"input">;

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ id, ...rest }, forwardedRef) => (
    <input
      type="text"
      id={id}
      className="block w-full rounded"
      ref={forwardedRef}
      {...rest}
    />
  ),
);

export default TextInput;
