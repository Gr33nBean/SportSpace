import { Clock5 } from 'lucide-react'

import FilterSelect from './FilterSelect'

const TimeSelect = ({ control }: any) => {
  const times = [
    { name: 'time.6am', label: '6:00' },
    { name: 'time.7am', label: '7:00' },
    { name: 'time.8am', label: '8:00' },
    { name: 'time.9am', label: '9:00' },
    { name: 'time.10am', label: '10:00' },
  ]

  return <FilterSelect data={times} title='Giờ' icon={<Clock5 size={20} />} control={control} />
}

export default TimeSelect
