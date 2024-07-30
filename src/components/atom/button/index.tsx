"use client";

import React, { ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    loading?: boolean;
    size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
    className?: string;
    children: ReactNode;
    firstIcon?: ReactNode;
    lastIcon?: ReactNode;
}

const ButtonSize: Record<NonNullable<ButtonProps['size']>, string> = {
    xs: 'px-2 py-2 leading-5 text-sm',
    sm: 'px-3 py-2 leading-5 text-sm',
    base: 'px-4 py-2 leading-6 text-sm',
    lg: 'px-4 py-2 text-base',
    xl: 'px-6 py-3 text-base',
};

const ButtonVariants: Record<NonNullable<ButtonProps['variant']>, string> = {
    primary: 'bg-[#5454D4] text-white hover:bg-[#5454D4]',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    outline: 'border border-white text-white hover:bg-white hover:text-black duration-300',
    ghost: 'bg-transparent text-gray-500 hover:bg-gray-100',
};

export const Button = ({
    className,
    loading = false,
    size = 'base',
    variant = 'primary',
    children,
    firstIcon,
    lastIcon,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={cn(
                'inline-flex justify-center items-center font-medium shadow-sm focus:outline-none rounded-md gap-x-2',
                ButtonSize[size],
                ButtonVariants[variant],
                className
            )}
            disabled={loading}
            {...props}
        >
            {loading && (
                <svg
                    className="animate-spin mr-2 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                </svg>
            )}
            {!loading && firstIcon}
            {children}
            {!loading && lastIcon}
        </button>
    );
};
