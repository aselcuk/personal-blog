import { ElementType } from "react";
import { HTMLElementPropsWithRef } from "./styled-html-props";

// componentin root elemanı forwardRef ile kullanılacaksa bu interface ile kullanılmalıdır.
export default interface ICoreComponentWithRef<T extends ElementType<any>> extends React.ForwardRefExoticComponent<HTMLElementPropsWithRef<T>> { };