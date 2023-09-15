import { ComponentProps } from "react";

type LabelProps = ComponentProps<"label">;

const Label = ({ children, ...rest }: LabelProps) => (
  <label className="block font-medium" {...rest}>
    {children}
  </label>
);

export default Label;
