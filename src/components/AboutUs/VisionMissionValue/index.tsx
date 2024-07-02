import Image from 'next/image'

import React from 'react'

const list = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4TZuD-wR36xWkZnz4xoSJHaDlGqGz5Lmaqg&s',
    title: 'Tầm nhìn',
    description: (
      <p>
        To be the leading technology partner in the region for fostering sports collaboration and facilitating the
        growth of the sports ecosystem.
      </p>
    ),
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4TZuD-wR36xWkZnz4xoSJHaDlGqGz5Lmaqg&s',
    title: 'Sứ mệnh',
    description: (
      <p>
        We aspire to be the biggest supporters of sports! With our sports technology and a strong can-do sporting
        spirit, here are three things to which we are wholeheartedly committed:
        <br></br>
        <span className='pl-2'>
          Getting people to play more sports by
          <br></br>
          Connecting more players, businesses and communities with our technology
          <br></br>
          For the growth of the sports ecosystem
        </span>
      </p>
    ),
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4TZuD-wR36xWkZnz4xoSJHaDlGqGz5Lmaqg&s',
    title: 'Giá trị',
    description: (
      <p>
        <strong>We work as a team​</strong>
        <br></br>
        Just like in sports, exceptional team players strengthen our teams. We believe in collaborating with exceptional
        employees who prioritize teamwork, bringing their A-game every day. Our doors are also open to partnering with
        like-minded individuals and innovators who share our passion for advancing sports.
        <br></br>
        <strong>We believe in tech for the community​</strong>
        <br></br>
        We are dedicated to delivering outstanding products that are both straightforward and purposeful, ensuring that
        sports remain enjoyable without causing headaches for players and businesses.​
        <br></br>
        <strong>We pursue excellence​</strong>
        <br></br>
        Our customer-centred approach guides us to consistently innovate, learn, and enhance our services to better
        serve the sports industry. Through our sports technology and innovative approach, we are already breaking
        traditional boundaries and will continue to do so to elevate the sports industry.
      </p>
    ),
  },
]

const VisionMissionValue = () => {
  return (
    <div className='container flex flex-col gap-10 bg-light-gray py-10'>
      {list.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col-reverse items-stretch gap-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
        >
          <Image
            src={item.image}
            height={200}
            width={200}
            className='min-h-[300px] w-full object-cover md:w-[30%]'
            alt='Picture of the author'
          />
          <div className='flex flex-1 flex-col justify-center text-sm text-primary'>
            <p className='pb-2 text-base font-semibold text-secondary'>{item.title}</p>
            {item.description}
          </div>
        </div>
      ))}
    </div>
  )
}

export default VisionMissionValue
