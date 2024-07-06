import React from 'react'

import Footer from '@/components/Layout/Footer'
import ClientHeader from '@/components/Layout/Header/ClientHeader'

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <ClientHeader />
      {children}
      <Footer />
    </React.Fragment>
  )
}

export default ClientLayout
