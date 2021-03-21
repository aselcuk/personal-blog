import React from 'react';
import { Container, Content } from './styles/RootRefTest';
import { HTMLElementProps, HTMLElementPropsWithRef, IComponentWithRef } from 'core';

interface IBox extends IComponentWithRef<'div'> {
    Content: (props: HTMLElementProps<'div'>) => JSX.Element;
}


const RootRefTest = React.forwardRef((props: HTMLElementPropsWithRef<'div'>, ref) => {
    return <Container ref={ref} {...props} customStyle={props.customStyle}>{props.children}</Container>;
}) as IBox;

RootRefTest.Content = function RootRefTestContent({ children, customStyle, ...props }: HTMLElementProps<'div'>) {
    return <Content {...props} customStyle={customStyle}>{children}</Content>;
};

export default RootRefTest;