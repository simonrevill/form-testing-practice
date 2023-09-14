import { ComponentProps } from "react";

type ErrorMessageProps = ComponentProps<"p">;

const ErrorMessage = ({ children }: ErrorMessageProps) => (
  <p className="text-red-500">{children}</p>
);

export default ErrorMessage;
