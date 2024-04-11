import { ListGifs } from '../../components/ListGifs'
import { useGifs } from '../../hooks/useGifs';
import './search.css'


export default function Search({ params }) {
  const { keyword } = params;
  const {gifs, loading} = useGifs({keyword})
  return (
    <>
      <main>
        <h2 className='search__title'>{decodeURI(keyword)}</h2>
        <section className='gifs__container'>
          <ListGifs gifs={gifs} loading={loading}/>
        </section>
      </main>
    </>
  )
}