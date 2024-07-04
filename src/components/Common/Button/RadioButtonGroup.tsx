import React from 'react';
import clsx from 'clsx';
import { RadioButton } from './RadioButton';

export type RadioButtonGroupProps = {
    options: Array<{ label: string; value: string }>;
    selectedValue: string;
    onChange?: (selectedValue: any) => void;
    className?: string;
    name: string;
    disabled?: boolean;
};

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
    options,
    selectedValue,
    onChange,
    className,
    name,
    disabled = false,
}) => {
    const handleRadioButtonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(onChange){
            onChange(event.target.value);
        }
    };

    return (
        <div className={clsx('radio-button-group', className)}>
            {options?.map((option) => (
                <RadioButton
                    key={option.value}
                    id={`${name}-${option.value}`}
                    name={name}
                    value={option.value}
                    label={option.label}
                    checked={selectedValue === option.value}
                    onChange={handleRadioButtonChange}
                    disabled={disabled}
                    className="mb-2"
                />
            ))}
        </div>
    );
};
