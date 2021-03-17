import { HTMLElementProps } from 'core';
import { Container } from './styles/Box';


export default function Box({ children, customStyle, ...props }: HTMLElementProps<'div'>) {
    return <Container {...props} customStyle={customStyle}>{children}</Container>;
}