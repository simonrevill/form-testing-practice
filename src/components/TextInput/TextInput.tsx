import { ComponentProps, forwardRef } from "react";

type TextInputProps = {
  id: string;
} & ComponentProps<"input">;

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ id, ...rest }, ref) => (
    <input type="text" id={id} className="block w-full" ref={ref} {...rest} />
  ),
);

export default TextInput;
