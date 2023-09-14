import { ComponentProps, forwardRef } from "react";

type CheckboxInputProps = {
  id: string;
} & ComponentProps<"input">;

const CheckboxInput = forwardRef<HTMLInputElement, CheckboxInputProps>(
  ({ id, ...rest }, forwardedRef) => (
    <input type="checkbox" id={id} ref={forwardedRef} {...rest} />
  ),
);

export default CheckboxInput;
