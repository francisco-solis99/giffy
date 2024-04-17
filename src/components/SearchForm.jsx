import React ,{ useRef } from 'react'
import { SearchIcon } from '@components/icons/Search';

function SearchForm({ onSubmit }) {
  const searchRef = useRef('')
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({keyword: searchRef.current.value})
  }

  // const handleChange = (e) => {
  //   setSearch(e.target.value)
  // }

  return (
    <div className='searcher__wrapper'>
        <form onSubmit={handleSubmit} className='searcher__form'>
          <div className='searcher'>
            <span>
              <SearchIcon />
            </span>
            <input ref={searchRef} type="text"  required />
            <button type='submit'>Search</button>
          </div>
        </form>
    </div>
  )
}


export default React.memo(SearchForm)