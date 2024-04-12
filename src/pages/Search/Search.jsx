import { ListGifs } from '../../components/ListGifs'
import { useGifs } from '../../hooks/useGifs';
import './search.css'


export default function Search({ params }) {
  const { keyword } = params;
  const {gifs, loading, setPage} = useGifs({keyword})

  const handleClickNextGifs = () => {
    setPage(prevPage => prevPage + 1);
  }

  return (
    <>
      <main>
        <h2 className='search__title'>{decodeURI(keyword)}</h2>
        <section className='gifs__container'>
          <ListGifs gifs={gifs} loading={loading}/>
        </section>
        <div className='gifs__more-container'>
          <button className='gifs__more-btn' onClick={handleClickNextGifs}>Load More</button>
        </div>
      </main>
    </>
  )
}