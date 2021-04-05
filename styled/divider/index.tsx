import { Container } from './styles/Divider';
import { HTMLElementProps } from 'core';

export default function Divider({ children, customStyle, ...props }: HTMLElementProps<'div'>) {
  return <Container {...props} customStyle={customStyle}>{children}</Container>;
}