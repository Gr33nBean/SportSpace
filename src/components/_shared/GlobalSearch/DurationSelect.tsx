import React from 'react'
import { Timer } from 'lucide-react'
import FormSelectSearch from '@/components/Common/Form/base/FormSelectSearch'

const DurationSelect = (props: any) => {
    const { register } = props
    const options = [
        {
            label: '30m',
            value: '30m'
        },
        {
            label: '1h',
            value: '1h'
        },
    ]

    return (
        <FormSelectSearch
            options={options}
            key={'duration'}
            icon={
            <Timer size={18} />
            }
            placeholder='Thời hạn'
            register={register}
            name={'duration'}
        />
    )
}

export default DurationSelect