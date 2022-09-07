/// <reference types="react" />
interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: "small" | "medium" | "large";
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}
/**
 * 这是一个按钮组件
 */
declare const Button: ({ primary, size, backgroundColor, label, ...props }: ButtonProps) => JSX.Element;
export default Button;
