import { ComponentProps } from "react";

type TextInputProps = {
  name: string;
} & ComponentProps<"input">;

const TextInput = ({ name, ...rest }: TextInputProps) => (
  <input type="text" name={name} id={name} className="block w-full" {...rest} />
);

export default TextInput;
