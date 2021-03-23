import { HTMLElementProps } from 'core';
import { Center, Container } from './styles/Box';


export default function Box({ children, customStyle, ...props }: HTMLElementProps<'div'>) {
    return <Container {...props} customStyle={customStyle}>{children}</Container>;
}

Box.Center = function BoxCenter({ children, customStyle, ...props }: HTMLElementProps<'div'>) {
    return <Center {...props} customStyle={customStyle}>{children}</Center>;
};