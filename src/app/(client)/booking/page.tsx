import { redirect } from 'next/navigation'

import { routes } from '@/config/routes'

const Page = () => {
  redirect(routes.search)
}

export default Page
