import Image from 'next/image'

import React from 'react'

const Introduction = () => {
  return (
    <section className='container w-full py-10'>
      <p className='text-center text-xl font-semibold text-primary'>About Us</p>
      <div className='flex w-full items-center gap-10 pt-10'>
        <Image
          alt='Picture of the author'
          width={333}
          height={500}
          className='hidden h-[500px] bg-red-400 object-cover lg:!block'
          src={
            'https://thedrum-media.imgix.net//thedrum-prod/s3/news/tmp/669632/header_image.jpg?w=1280&ar=default&fit=crop&crop=faces&auto=format'
          }
        />

        <p className='flex-1 text-start text-primary'>
          Courtsite began as a simple solution to a decades-long problem: sports players found it hard to locate and
          reserve sports facilities, and venue operators needed more efficient ways to streamline booking processes. Our
          self-service booking and facility automation platform has now made an operational difference for over 200,000
          players across more than 1,000 different sports spaces, and counting, who now trust Courtsite for their sports
          reservations.<br></br> Having addressed obvious gaps in our sports environment, we now set our sights beyond
          just improving pain points to elevating the sports ecosystem as a whole. Our robust data on sports individuals
          and business trends, resource and inventory management, automation, reservation technologies, and community
          management are primed for further evolution.<br></br> As a leading sports technology company, we aim to pave
          the way for groundbreaking initiatives by fostering a vibrant network of players, businesses, and innovators
          to collaborate and build upon our strengths, advancing the sports ecosystem together.
        </p>
      </div>
    </section>
  )
}

export default Introduction
