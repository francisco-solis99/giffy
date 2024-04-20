import React ,{ useState } from 'react'
import { useLocation } from 'wouter';
import { SearchIcon } from '@components/icons/Search';

const RATINGS = ['g', 'pg', 'pg-13', 'r'];

export function SearchForm({initialKeyword = '', initialRating = 'g'}) {
  const [searchKeyword, setSearchKeyword] = useState(initialKeyword)
  const [rating, setRating] = useState(initialRating)
  const [, setLocation] = useLocation()

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(`/search/${searchKeyword}/${rating}`)
  }

  const handlerChangeRating = (e) => {
    setRating(e.target.value)
  }

  const handleChangeKeyword = (e) => {
    setSearchKeyword(e.target.value)
  }

  return (
    <div className='searcher__wrapper'>
        <form onSubmit={handleSubmit} className='searcher__form'>
          <div className='searcher'>
            <span>
              <SearchIcon />
            </span>
            <input type="text" value={searchKeyword} onChange={handleChangeKeyword} required />
            <button type='submit'>Search</button>
          </div>
          <div className='searcher__rating'>
            <label htmlFor="rating">Select rating</label>
            <select name="rating" id="rating" value={rating} onChange={handlerChangeRating}>
              <option value="" disabled>Select rating</option>
              {
                RATINGS.map(rating => {
                 return (
                    <option key={rating} value={rating}>{rating}</option>
                 )
                })
              }
            </select>
          </div>
        </form>
    </div>
  )
}


export default React.memo(SearchForm)