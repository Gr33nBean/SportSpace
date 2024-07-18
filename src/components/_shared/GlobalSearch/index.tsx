'use client'
import { Search } from 'lucide-react'
import { useForm } from 'react-hook-form';
import PrimaryButton from '@/components/Common/Button/PrimaryButton'
import Divider from './Divider';
import CourtNameInput from './CourtNameInput';
import PlaceSelect from './PlaceSelect';
import SportSelect from './SportSelect';
import TimeSelect from './TimeSelect';
import DurationSelect from './DurationSelect';
import DateSelect from './DateSelect';


const GlobalSearch = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className='max-w-[65rem] w-full rounded-md border bg-gray-100 py-2 shadow-sm lg:w-auto lg:rounded-full lg:px-2 lg:py-1'>
      <form className='w-full' onSubmit={onSubmit}>
        <div className='flex w-full flex-col items-center gap-3 lg:flex-row'>
          <CourtNameInput register={register} />
          <Divider />
          <SportSelect register={register} />
          <Divider />
          <PlaceSelect register={register} />
          <Divider />
          <DateSelect register={register} />
          <Divider />
          <TimeSelect register={register} />
          <Divider />
          <DurationSelect register={register} />
          <button className='hidden rounded-full bg-white p-2 px-4 shadow-md lg:!block' onClick={onSubmit}>
            <Search size={18} />
          </button>
          {/*  */}

          <div className='w-full px-2 lg:hidden'>
            <PrimaryButton variant='outlined' radius='full' className='w-full lg:hidden'>
              Tìm kiếm
            </PrimaryButton>
          </div>
        </div>
      </form>
    </div>
  )
}

export default GlobalSearch
