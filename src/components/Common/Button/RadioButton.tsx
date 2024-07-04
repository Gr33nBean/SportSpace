import React from 'react';
import clsx from 'clsx';
import { Input } from '../Input';

export type RadioButtonProps = {
    id: string;
    name: string;
    value: string;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    className?: string;
    disabled?: boolean;
};

export const RadioButton: React.FC<RadioButtonProps> = ({
    id,
    name,
    value,
    checked = false,
    onChange,
    label,
    className,
    disabled = false
}) => {
    return (
        <div className={clsx('flex items-center', className)}>
            <Input
                type="radio"
                id={id}
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                className={clsx(
                    'form-radio h-4 w-4 transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50',
                    { 'cursor-not-allowed opacity-50': disabled }
                )}
            />
            {label && (
                <label htmlFor={id} className="ml-2 text-sm font-medium text-gray-900">
                    {label}
                </label>
            )}
        </div>
    );
};
