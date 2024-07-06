import React, {
    forwardRef,
} from 'react';
import clsx from 'clsx';

export type TexAreaSize = 'small' | 'medium' | 'large';

export type TextAreaProps = {
    id?: string;
    name: string;
    label?: string;
    size?: TexAreaSize;
    className?: string;
} &
    React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const sizeMap: { [key in TexAreaSize]: string } = {
    small: 'p-0 text-sm',
    medium: 'p-3 text-base',
    large: 'p-4 text-base',
};

export const TextArea: React.FC<TextAreaProps> = forwardRef<HTMLTextAreaElement, TextAreaProps>(
    (
        {
            id,
            name,
            label,
            size = 'medium',
            className = '',
            placeholder,
            ...props
        },
        ref
    ) => {
        return (
            <textarea
                id={id}
                ref={ref}
                name={name}
                aria-label={label}
                placeholder={placeholder}
                className={clsx('bg-white relative inline-flex w-full rounded leading-none transition-colors ease-in-out placeholder-gray-500 text-gray-700 bg-gray-50 border border-gray-300 hover:border-blue-400 focus:ring-1 focus:border-blue-400', sizeMap[size], className)}
                {...props}
            />
        );
    }
);

TextArea.displayName = "TextArea"