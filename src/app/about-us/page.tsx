import React from 'react'

import Introduction from '@/components/AboutUs/Introduction'
import Numbers from '@/components/AboutUs/Numbers'
import OurTeam from '@/components/AboutUs/OurTeam'
import VisionMissionValue from '@/components/AboutUs/VisionMissionValue'

const AboutUs = () => {
  return (
    <div className=''>
      <Introduction />
      <VisionMissionValue />
      <Numbers />
      <OurTeam />
    </div>
  )
}

export default AboutUs
