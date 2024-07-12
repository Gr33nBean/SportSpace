import React from 'react'

import FilterCourt from '@/components/_shared/FilterCourt'
import ContactUs from '@/components/AboutUs/ContactUs'
import Introduction from '@/components/AboutUs/Introduction'
import Numbers from '@/components/AboutUs/Numbers'
import OurTeam from '@/components/AboutUs/OurTeam'
import VisionMissionValue from '@/components/AboutUs/VisionMissionValue'

const AboutUs = () => {
  return (
    <div className=''>
      <FilterCourt />
      <Introduction />
      <VisionMissionValue />
      <Numbers />
      <OurTeam />
      <ContactUs />
    </div>
  )
}

export default AboutUs
