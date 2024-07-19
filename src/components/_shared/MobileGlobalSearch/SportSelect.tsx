import { Layers } from 'lucide-react'

import FilterSelect from './FilterSelect'

const SportSelect = ({ control }: any) => {
  const sports = [
    { name: 'sport.caulong', label: 'Cầu Lông' },
    { name: 'sport.pickleball', label: 'Pickleball' },
  ]

  return <FilterSelect data={sports} title='Môn thể thao' icon={<Layers size={20} />} control={control} />
}

export default SportSelect
