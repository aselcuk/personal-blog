import React, { ElementType } from "react";

export type HTMLElementProps<T extends ElementType<any>> = React.ComponentPropsWithoutRef<T> & {
    customStyle?: Array<string>;
}

export type HTMLElementPropsWithRef<T extends ElementType<any>> = React.ComponentPropsWithRef<T> & {
    customStyle?: Array<string>;
}