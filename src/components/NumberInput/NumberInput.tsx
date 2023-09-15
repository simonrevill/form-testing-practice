import { ComponentProps, forwardRef } from "react";

type NumberInputProps = {
  id: string;
} & ComponentProps<"input">;

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  ({ id, ...rest }, forwardedRef) => (
    <input
      type="number"
      id={id}
      className="block w-full rounded"
      ref={forwardedRef}
      {...rest}
    />
  ),
);

export default NumberInput;
