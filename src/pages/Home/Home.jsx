import { Link } from 'wouter';
import './home.css'

const POPULAR_GIFS = ['Selena Gomez', 'Batman', 'Spiderman']

export default function Home(){
  return (
    <main className='home__container'>
      <h2 className='popular__title'>The most popular Gifs 🖼️</h2>
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
    </main>
  )
}