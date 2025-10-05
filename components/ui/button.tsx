import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary"
};

const buttonStyles = {
    primary: "text-white text-2xl",
    secondary: "text-primary font-semibold bg-card-background py-2 px-4 rounded-full"
};

const Button: React.FC<ButtonProps> = ({
    variant = "primary",
    className,
    children,
    ...props
}) => {
    return (
        <button
            className={clsx(
                "rounded transition-colors",
                buttonStyles[variant],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;