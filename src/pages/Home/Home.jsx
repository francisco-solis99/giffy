import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { SearchIcon } from '../../components/icons/Search';
import './home.css'

const POPULAR_GIFS = ['Selena Gomez', 'Batman', 'Spiderman']

export default function Home(){
  const [search, setSearch] = useState('')
  const [, setLocation] = useLocation()

  const handleSubmit = (e) => {
    e.preventDefault();
    // Go to the search results page
    setLocation(`/search/${search}`)
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className='home__container'>
      {/* Searcher */}
      <div className='searcher__wrapper'>
          <form onSubmit={handleSubmit} className='searcher__form'>
            <div className='searcher'>
              <span>
                <SearchIcon/>
              </span>
              <input onChange={handleChange} type="text" value={search}/>
              <button type='submit'>Search</button>
            </div>
          </form>
      </div>

      {/* Gifs */}
      <main className='last-gifs'>
        <h2>Your last search</h2>
      </main>

      {/* Trending categories */}
      <aside className='popular__gifs'>
        <h3 className='popular__title'>
          The most popular Gifs 🖼️
        </h3>
        <ul className='popular__list'>
          {
            POPULAR_GIFS.map(gif => (
              <li key={gif}>
                <Link to={`search/${gif}`}>
                  {gif} gifs
                </Link>
              </li>
            ))
          }
        </ul>
      </aside>
    </div>
  )
}