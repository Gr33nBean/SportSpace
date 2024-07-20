import { MapPin } from 'lucide-react'

import FilterSelect from './FilterSelect'

const PlaceSelect = ({ control }: any) => {
  const places = [
    { name: 'place.hcm', label: 'Hồ Chí Minh' },
    { name: 'place.hn', label: 'Hà Nội' },
    { name: 'place.dn', label: 'Đà Nẵng' },
    { name: 'place.ct', label: 'Cần Thơ' },
    { name: 'place.dn', label: 'Đồng Nai' },
  ]

  return <FilterSelect data={places} title='Địa điểm' icon={<MapPin size={20} />} control={control} />
}

export default PlaceSelect
