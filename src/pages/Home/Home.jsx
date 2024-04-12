import { useRef } from 'react';
import { useLocation } from 'wouter';
import { useGifs } from '@hooks/useGifs';
import { SearchIcon } from '@components/icons/Search';
import { ListGifs } from '@components/ListGifs';
import { LazyTrendingGifs } from '@components/LazyTrendingGifs';

import './home.css'

// const POPULAR_GIFS = ['Selena Gomez', 'Batman', 'Spiderman', 'Super Bowl']

export default function Home() {
  const searchRef = useRef('')
  const [, setLocation] = useLocation()
  const { loading, gifs } = useGifs({search: searchRef.current.value})


  const handleSubmit = (e) => {
    e.preventDefault();
    // Go to the search results page
    setLocation(`/search/${searchRef.current.value}`)
  }

  // const handleChange = (e) => {
  //   setSearch(e.target.value)
  // }

  return (
    <div className='home__container'>
      {/* Searcher */}
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

      {/* Gifs */}
      <main className='last-gifs'>
        <h2>Your last search:</h2>
        <section className="gifs__container">
          <ListGifs gifs={gifs} loading={loading}></ListGifs>
        </section>
      </main>

      {/* Categories */}
      <aside className='popular__gifs'>
        {/* <Category name="Popular Gifs" items={POPULAR_GIFS}/> */}
        <LazyTrendingGifs/>
      </aside>
    </div>
  )
}