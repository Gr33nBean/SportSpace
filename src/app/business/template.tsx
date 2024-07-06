'use client'
import React from 'react'

import FadeIn from '@/components/Animation/FadeIn'

const Template = ({ children }: { children: React.ReactNode }) => {
  return <FadeIn>{children}</FadeIn>
}

export default Template
