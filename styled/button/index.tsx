import { BackButton } from 'styled/button/styles/BackButton';
import { Button as DefaultButton } from 'styled/button/styles/Button';
import { LoginButton } from 'styled/button/styles/LoginButton';
import React from 'react';
import { HTMLElementProps, HTMLElementPropsWithRef } from 'core';

export default function Button({ children, ...props }: HTMLElementProps<'button'>) {
  return <DefaultButton {...props}>{children}</DefaultButton>;
}

Button.BackButton = React.forwardRef(({ children, customStyle, ...props }: HTMLElementPropsWithRef<'button'>, ref) => {
  return <BackButton ref={ref} {...props} customStyle={customStyle}>{children}</BackButton>;
});

Button.LoginButton = React.forwardRef(({ children, customStyle, ...props }: HTMLElementPropsWithRef<'button'>, ref) => {
  return <LoginButton ref={ref} {...props} customStyle={customStyle}>{children}</LoginButton>;
});