import React from 'react'

import GlobalModal from '@/components/_shared/GlobalModal'
import Overlay from '@/components/Common/Overlay'
import Footer from '@/components/Layout/Footer'
import ClientHeader from '@/components/Layout/Header/ClientHeader'

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <ClientHeader />
      {children}
      <Overlay />
      <GlobalModal />
      <Footer />
    </React.Fragment>
  )
}

export default ClientLayout
