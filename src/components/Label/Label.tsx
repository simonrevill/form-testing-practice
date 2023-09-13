import { ComponentProps } from 'react';

type LabelProps = ComponentProps<'label'>;

const Label = ({ children, ...rest }: LabelProps) => (
  <label className="block" {...rest}>
    {children}
  </label>
);

export default Label;
