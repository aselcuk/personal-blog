import { HTMLElementProps } from 'core';
import { SwitchButton, SwitchInput, SwitchLabel } from './styles/SwitchInput';


export default function Switch({ children, customStyle, ...props }: HTMLElementProps<'span'>) {
  return <SwitchButton {...props} customStyle={customStyle}>{children}</SwitchButton>;
}

Switch.Input = function SwitchInp({ children, customStyle, ...props }: HTMLElementProps<'input'>) {
  return <SwitchInput {...props} customStyle={customStyle}>{children}</SwitchInput>;
};

Switch.Label = function SwitchLab({ children, customStyle, ...props }: HTMLElementProps<'label'>) {
  return <SwitchLabel {...props} customStyle={customStyle}>{children}</SwitchLabel>;
};