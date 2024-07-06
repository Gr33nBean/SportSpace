import React, { forwardRef } from 'react';
import clsx from 'clsx';

export type RadioButtonProps = {
    id: string;
    name?: string;
    value: string;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    className?: string;
    disabled?: boolean;
};

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(({
    id,
    value,
    label,
    className,
    disabled = false,
    ...props
}, ref) => {

    return (
        <div className={clsx('flex items-center', className)}>
            <input
                type="radio"
                id={id}
                value={value}
                ref={ref}
                disabled={disabled}
                {...props}
                className={clsx(
                    'texborder-none outline-none form-radio h-4 w-4 transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50',
                    { 'cursor-not-allowed opacity-50': disabled }
                )}
            />
            {label && (
                <label htmlFor={id} className="ml-2 text-sm font-medium text-primary flex-1">
                    {label}
                </label>
            )}
        </div>
    );
});

RadioButton.displayName = "RadioButton"