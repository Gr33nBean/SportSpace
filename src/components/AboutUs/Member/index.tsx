import Image from 'next/image'
import React from 'react'

type MemberProps = {
    data: {
        image: string,
        name: string,
        description: string
    }
}

const Member = (props: MemberProps) => {
    const { data } = props
    return (
        <div className='flex flex-col gap-5 w-64 items-center justify-center px-2 pb-10 pt-4 m-2'>
            <Image
                src={data.image}
                height={170}
                width={170}
                className="rounded-full aspect-square object-cover"
                alt="Picture of the author" />
            <div className='flex flex-col text-center'>
                <span className='font-bold font-Inter text-primary text-xl'>{data.name}​</span>
                <p className='text-xl text-primary font-Inter font-normal'>{data.description}​</p>
            </div>
        </div>
    )
}

export default Member