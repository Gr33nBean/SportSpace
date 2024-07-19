'use client'
import React, { useState } from 'react'
import FilterCheckboxButton from '@/components/Common/Filter/FilterCheckboxButton';
import { ChevronDown } from 'lucide-react';

type Filter = {
    name: string,
    label: string
}

type FilterSelect = {
    data: Filter[],
    control: any,
    title: string,
    icon: React.ReactNode

} 

const FilterSelect = ({ data, title, icon, control }: FilterSelect) => {
    const displayNumber = 4;
    const [expand, setExpand] = useState(false);
    const displayedData = expand ? data : data.slice(0, displayNumber);

    return (
        <div>
            <div className='flex gap-4 mb-2 items-center'>
                {icon}
                <p className='font-bold'>{title}</p>
            </div>

            <div className='grid grid-cols-2 gap-2'>
                {displayedData.map((item) => (
                    <FilterCheckboxButton
                        key={item.name}
                        name={item.name}
                        label={item.label}
                        control={control}
                    />
                ))}
            </div>

            {data.length > displayNumber && (
                <div onClick={() => setExpand(!expand)} className='flex justify-center mt-4 gap-2 text-sm items-center cursor-pointer text-gray-400'>
                    <p>{expand ? 'Thu gọn': 'Xem thêm'}</p>
                    <ChevronDown className={`transition-all duration-[350ms] ${expand ? 'rotate-180': ''}`} size={18}/>
                </div>
            )}
        </div>
    )
}

export default FilterSelect
