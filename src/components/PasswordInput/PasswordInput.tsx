import { ComponentProps } from "react";

type PasswordInputProps = {
  name: string;
} & ComponentProps<"input">;

const PasswordInput = ({ name, ...rest }: PasswordInputProps) => (
  <input
    type="password"
    name={name}
    id={name}
    className="block w-full"
    {...rest}
  />
);

export default PasswordInput;
