import React from 'react'
import { Layers } from 'lucide-react'
import FormSelectSearch from '@/components/Common/Form/base/FormSelectSearch'

const SportSelect = (props: any) => {
    const { register } = props
    const options = [
        {
            label: 'Cầu Lông',
            value: 'caulong'
        },
        {
            label: 'Bóng đá',
            value: 'bongda'
        },
    ]

    return (
        <FormSelectSearch
            options={options}
            key={'sport'}
            icon={
            <Layers size={18} />

            }
            placeholder='Môn thể thao'
            register={register}
            name={'sport'}
        />
    )
}

export default SportSelect