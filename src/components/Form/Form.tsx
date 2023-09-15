import { ComponentProps } from "react";

type FormProps = ComponentProps<"form">;

const Form = ({ children, ...rest }: FormProps) => (
  <form className="flex flex-col gap-4" {...rest}>
    {children}
  </form>
);

export default Form;
