import React from 'react'
import { Clock5 } from 'lucide-react'

import FormSelectSearch from '@/components/Common/Form/base/FormSelectSearch'

const TimeSelect = (props: any) => {
  const { register } = props
  const options = [
    {
      label: '7AM-8AM',
      value: '7AM-8AM',
    },
    {
      label: '8AM-9AM',
      value: '8AM-9AM',
    },
  ]

  return (
    <FormSelectSearch
      options={options}
      key={'time'}
      icon={<Clock5 size={18} />}
      placeholder='Thời gian'
      register={register}
      name={'time'}
    />
  )
}

export default TimeSelect
