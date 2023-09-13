import { ComponentProps } from "react";

type CheckboxInputProps = {
  name: string;
} & ComponentProps<"input">;

const CheckboxInput = ({ name, ...rest }: CheckboxInputProps) => (
  <input type="checkbox" name={name} id={name} {...rest} />
);

export default CheckboxInput;
