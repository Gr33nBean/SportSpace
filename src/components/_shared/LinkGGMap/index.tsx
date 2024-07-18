import React from 'react'
import clsx from 'clsx'

type LinkGGMap = {
  children: React.ReactNode
  link: string
  className?: string
}

const GG_MAP_URL = 'https://www.google.com/maps/place'

const LinkGGMap = ({ children, link, className }: LinkGGMap) => {
  const encodedAddress = encodeURIComponent(link)
  return (
    <a
      href={`${GG_MAP_URL}/${encodedAddress}`}
      className={clsx('underline', className)}
      target='_blank'
      rel='noopener noreferrer'
    >
      {children}
    </a>
  )
}

export default LinkGGMap
