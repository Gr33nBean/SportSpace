import FilterCourt from '@/components/_shared/FilterCourt'
import CourtList from '@/components/Search/CourtList'

const Search = () => {
  return (
    <main className='container mt-10 flex flex-col gap-8 md:flex-row'>
      <FilterCourt />
      <CourtList />
    </main>
  )
}

export default Search
