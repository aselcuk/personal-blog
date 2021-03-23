import { Container } from './styles/Text';
import { HTMLElementProps } from 'core';

export default function Text({ children, customStyle, ...props }: HTMLElementProps<'span'>) {
  return <Container {...props} customStyle={customStyle}>{children}</Container>;
}