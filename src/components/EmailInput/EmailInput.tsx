import { ComponentProps } from "react";

type EmailInputProps = {
  name: string;
} & ComponentProps<"input">;

const EmailInput = ({ name, ...rest }: EmailInputProps) => (
  <input
    type="email"
    name={name}
    id={name}
    className="block w-full"
    {...rest}
  />
);

export default EmailInput;
