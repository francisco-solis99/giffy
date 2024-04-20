import { useGifs } from '@hooks/useGifs';
import { useSeo } from '@hooks/useSeo';
import { ListGifs } from '@components/ListGifs';
import { LazyTrendingGifs } from '@components/LazyTrendingGifs';
import SearchForm  from '@components/SearchForm'

import './home.css'
// const POPULAR_GIFS = ['Selena Gomez', 'Batman', 'Spiderman', 'Super Bowl']

export default function Home() {
  const { loading, gifs } = useGifs()
  useSeo({title: 'Home', description: 'Giffy search the best and unique gifs' })

  return (
    <div className='home__container'>
      {/* Searcher */}
      <SearchForm />

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