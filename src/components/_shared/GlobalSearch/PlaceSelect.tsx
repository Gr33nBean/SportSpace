import React from 'react'
import { MapPin } from 'lucide-react'

import FormSelectSearch from '@/components/Common/Form/base/FormSelectSearch'

const PlaceSelect = (props: any) => {
  const { register } = props
  const options = [
    {
      label: 'Hồ Chí Minh',
      value: 'hcm',
    },
  ]

  return (
    <FormSelectSearch
      options={options}
      key={'place'}
      icon={<MapPin size={18} />}
      placeholder='Địa điểm'
      register={register}
      name={'place'}
    />
  )
}

export default PlaceSelect
