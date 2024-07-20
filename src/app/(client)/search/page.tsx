import MobileGlobalSearch from '@/components/_shared/MobileGlobalSearch'
import CourtList from '@/components/Search/CourtList'

const Search = () => {
  return (
    <main className='container my-10 flex flex-col items-center gap-8'>
      {/* { isMobile ? 
      :
      <GlobalSearch />
      } */}
      <MobileGlobalSearch />
      <CourtList />
    </main>
  )
}

export default Search
