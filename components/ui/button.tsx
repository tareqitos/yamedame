import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "secondaryBorder" | "search";
};

const buttonStyles = {
    primary: "text-2xl cursor-pointer hover:text-primary transition-primary",
    secondary: "text-primary font-semibold bg-card-background py-2 px-4 rounded-full transition-border cursor-pointer",
    secondaryBorder: "text-primary font-semibold bg-card-background py-2 px-4 rounded-full border-1 border-primary cursor-pointer",
    search: "inline-flex font-semibold bg-card-background py-2 px-4 rounded-lg border-1 border-primary/10 cursor-pointer"
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