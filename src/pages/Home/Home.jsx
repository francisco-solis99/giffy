import { useRef } from 'react';
import { useLocation } from 'wouter';
import { useGifs } from '@hooks/useGifs';
import { ListGifs } from '@components/ListGifs';
import { LazyTrendingGifs } from '@components/LazyTrendingGifs';
import SearchForm  from '@components/SearchForm'

import './home.css'
import { useCallback } from 'react';

// const POPULAR_GIFS = ['Selena Gomez', 'Batman', 'Spiderman', 'Super Bowl']

export default function Home() {
  const searchRef = useRef('')
  const [, setLocation] = useLocation()
  const { loading, gifs } = useGifs({search: searchRef.current.value})

  // use useCallback to avoid the change in the prop function for SearchForm component
  const handleSubmit = useCallback(({keyword}) => {
    // Go to the search results page
    setLocation(`/search/${keyword}`)
  }, [setLocation])



  return (
    <div className='home__container'>
      {/* Searcher */}
      <SearchForm onSubmit={handleSubmit}/>

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