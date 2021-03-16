import { ComponentPropsWithRef, ComponentPropsWithoutRef, ElementType } from "react";

export type HTMLElementProps<T extends ElementType<any>> = ComponentPropsWithoutRef<T> & {
    customStyle?: Array<string>;
}

export type HTMLElementPropsWithRef<T extends ElementType<any>> = ComponentPropsWithRef<T> & {
    customStyle?: Array<string>;
}

// componentin root elemanı forwardRef ile kullanılacaksa bu interface ile kullanılmalıdır.
export interface IComponentWithRef<T extends ElementType<any>> extends React.ForwardRefExoticComponent<HTMLElementPropsWithRef<T>> { };