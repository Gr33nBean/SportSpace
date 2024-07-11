import React from 'react'

import Footer from '@/components/Layout/Footer'
import BusinessHeader from '@/components/Layout/Header/BusinessHeader'

const BusinessLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <BusinessHeader />
      {children}
      <Footer />
    </React.Fragment>
  )
}

export default BusinessLayout
