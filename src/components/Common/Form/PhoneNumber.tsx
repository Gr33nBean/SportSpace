import { FormInput, BaseFormInputType } from "./base/FormInput"
import { Path } from 'react-hook-form';

const PhoneNumber = <TFormValues extends Record<string, unknown>>(props: BaseFormInputType<TFormValues>) => {
    const { register, errors } = props;
    return (
        <FormInput
            id='mobile'
            type='number'
            placeholder='Mobile number'
            rules={{ required: "You nmust enter mobile number" }}
            register={register}
            name={'mobile' as Path<TFormValues>}
            errors={errors}
        />
    )
}

export default PhoneNumber