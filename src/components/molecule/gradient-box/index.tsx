import React from 'react';
import { cn } from '@/lib/utils';

interface GradientBoxProps {
    width?: number;
    height?: number;
    fromColor?: string;
    toColor?: string;
    className?:string
}

export const GradientBox = (
    {
        fromColor,
        toColor,
        height = 100,
        width = 100,
        className
    }: GradientBoxProps) => {
    return (
        <div
            style={{
                background: `linear-gradient(180deg, ${fromColor} 0%, ${toColor} 100%)`,
                width: `${width}%`,
                height: `${height}%`,
            }}
            className={cn('absolute opacity-30 blur-3xl -z-20 rounded-full', className)}
        />
    )
}

