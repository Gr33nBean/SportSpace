import React from 'react';
import { UseFormRegister, Path, RegisterOptions, FieldValues, DeepMap, FieldError } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import clsx from 'clsx';
import { RadioButton } from '../Button/RadioButton';

export type FormRadioButtonGroupProps<TFormValues extends FieldValues> = {
    name: Path<TFormValues>;
    options: Array<{ label: string; value: string }>;
    rules?: RegisterOptions<TFormValues, Path<TFormValues>>;
    register?: UseFormRegister<TFormValues>;
    errors?: Partial<DeepMap<TFormValues, FieldError>> | any;
    className?: string;
    label?: string;
    disabled?: boolean;
};

export const FormRadioButtonGroup = <TFormValues extends Record<string, unknown>>({
    className,
    name,
    options,
    register,
    rules,
    errors,
    label,
    disabled = false,
}: FormRadioButtonGroupProps<TFormValues>) => {
    const errorMessages = errors?.[name];
    const hasError = !!(errors && errorMessages);

    return (
        <div className={className}>
            {label && <label className="block mb-2 text-sm font-medium text-gray-900">{label}</label>}
            {options.map((option) => (
                <RadioButton
                    key={option.value}
                    id={`${name}-${option.value}`}
                    name={name}
                    value={option.value}
                    label={option.label}
                    checked={false}  // react-hook-form will manage this
                    {...(register && register(name, rules))}
                    className={clsx(
                        "transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50",
                        { 
                            "border-red-600 hover:border-red-600 focus:border-red-600 focus:ring-red-600": hasError 
                        }
                    )}
                    disabled={disabled}
                />
            ))}
            <ErrorMessage
                errors={errors}
                name={name}
                render={({ message }) => (
                    <p className="mt-1 font-serif text-sm text-left block text-red-600">
                        {message}
                    </p>
                )}
            />
        </div>
    );
};
