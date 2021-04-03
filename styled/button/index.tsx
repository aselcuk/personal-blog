import { Button } from './styles/BackButton';
import { HTMLElementPropsWithRef } from 'core';
import React from 'react';


const BackButton = React.forwardRef(({ children, customStyle, ...props }: HTMLElementPropsWithRef<'button'>, ref) => {
  return <Button ref={ref} {...props} customStyle={customStyle}>{children}</Button>;
});

export default BackButton;