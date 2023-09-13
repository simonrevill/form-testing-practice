import { ComponentProps } from "react";

type NumberInputProps = {
  name: string;
} & ComponentProps<"input">;

const NumberInput = ({ name, ...rest }: NumberInputProps) => (
  <input type="number" name={name} id={name} {...rest} />
);

export default NumberInput;
