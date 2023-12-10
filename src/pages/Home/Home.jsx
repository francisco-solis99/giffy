import { Link } from 'wouter';
import { SearchIcon } from '../../components/icons/Search';
import './home.css'

const POPULAR_GIFS = ['Selena Gomez', 'Batman', 'Spiderman']

export default function Home(){
  return (
    <div className='home__container'>
      {/* Searcher */}
      <div className='searcher__wrapper'>
          <form action="" className='searcher__form'>
            <div className='searcher'>
              <span>
                <SearchIcon/>
              </span>
              <input type="text" />
              <button>Search</button>
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