import { ListGifs } from '../../components/ListGifs'
import './search.css'


export default function Search({ params }) {
  const { keyword } = params;

  return (
    <>
      <main>
        <h2 className='search__title'>{decodeURI(keyword)}</h2>
        <section className='gifs__container'>
          <ListGifs keyword={keyword}/>
        </section>
      </main>
    </>
  )
}