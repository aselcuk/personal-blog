import { Container } from './styles/Box';
import { HTMLElementProps } from 'core';


export default function Box({ children, customStyle, ...props }: HTMLElementProps<'div'>) {
    return <Container {...props} customStyle={customStyle}>{children}</Container>;
}