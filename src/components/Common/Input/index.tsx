import React, {
    forwardRef,
} from 'react';
import clsx from 'clsx';

export type InputSize = 'small' | 'medium' | 'large';
export type InputType = 'text' | 'email' | 'number' | 'radio';

export type InputProps = {
    id?: string;
    name: string;
    label?: string;
    type?: InputType;
    size?: InputSize;
    className?: string;
} & Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size'
>;

const sizeMap: { [key in InputSize]: string } = {
    small: 'p-0 text-sm',
    medium: 'p-3 text-sm',
    large: 'p-3 text-base',
};

export const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            id,
            name,
            label,
            type = 'text',
            size = 'medium',
            className = '',
            placeholder,
            ...props
        },
        ref
    ) => {
        return (
            <input
                id={id}
                ref={ref}
                name={name}
                type={type}
                aria-label={label}
                placeholder={placeholder}
                className={clsx('relative inline-flex w-full rounded leading-none transition-colors ease-in-out font font-Inter placeholder-gray-500 text-gray-700 bg-gray-50 border border-gray-300 hover:border-blue-400 focus:outline-none focus:ring-1 focus:border-blue-400', sizeMap[size], className)}
                {...props}
            />
        );
    }
);
