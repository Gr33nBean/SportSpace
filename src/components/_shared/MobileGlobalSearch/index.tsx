'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import SportSelect from './SportSelect';
import PlaceSelect from './PlaceSelect';
import TimeSelect from './TimeSelect';
import DurationSelect from './DurationSelect';
import { IconInput } from '@/components/Common/Input/IconInput';
import { Search } from "lucide-react";

const MobileGlobalSearch = () => {
  const { control, handleSubmit, register, reset } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log("data", data);
  });

  return (
    <div className='lg:hidden w-full flex flex-col gap-4'>
      <form onSubmit={onSubmit} className='flex flex-col gap-4 h-[37rem] overflow-y-auto'>
      <IconInput
        placeholder='Tìm sân...'
        icon={<Search />}
        className='rounded-lg border border-gray-100'
        {...(register && register("courtName"))}
      />
        <SportSelect control={control} />
        <hr />
        <PlaceSelect control={control} />
        <hr />
        <TimeSelect control={control} />
        <hr />
        <DurationSelect control={control}/>
      </form>
        <div className='flex gap-3 py-2'>
          <button className='flex-1 border border-gray-200 px-4 py-2 rounded-md font-semibold' onClick={() => reset()}>Thiết lập lại</button>
          <button type="submit" className='flex-1 bg-secondary px-4 py-2 rounded-md font-semibold' onClick={onSubmit}>Áp dụng</button>
        </div>
    </div>
  );
};

export default MobileGlobalSearch;
