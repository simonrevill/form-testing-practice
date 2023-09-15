import { ComponentProps } from "react";

type FormControlProps = {
  row?: boolean;
} & ComponentProps<"div">;

const FormControl = ({ children, row = false }: FormControlProps) => (
  <div
    className={`flex ${row ? "flex-row items-center gap-3" : "flex-col gap-1"}`}
  >
    {children}
  </div>
);

export default FormControl;
