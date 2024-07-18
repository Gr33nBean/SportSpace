import { Path } from 'react-hook-form'
import { BaseFormInputType } from '@/components/Common/Form/base/FormInput'
import FormInputSearch from '@/components/Common/Form/base/FormInputSearch'
import { LandPlot } from 'lucide-react'

const CourtNameInput = <TFormValues extends Record<string, unknown>>(props: BaseFormInputType<TFormValues>) => {
    const { register } = props

    return (
        <FormInputSearch 
            icon={
            <LandPlot size={18} />
            }
            type='text'
            placeholder='Tên sân' 
            register={register}
            name={'courtName' as Path<TFormValues>}
         />
    )
}

export default CourtNameInput