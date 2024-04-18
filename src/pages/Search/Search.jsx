import { ListGifs } from '@components/ListGifs'
import { useGifs } from '@hooks/useGifs';
import { useLazyScreen } from '@hooks/useLazyScreen';
import './search.css'
import { useEffect, useRef, useMemo} from 'react';
import debounce from "just-debounce-it";
import { useSeo } from '../../hooks/useSeo';

export default function Search({ params }) {
  const { keyword } = params;
  const {gifs, loading, setPage} = useGifs({keyword})
  // use the lazy loading hook
  const externalRef = useRef()
  const { isShow } = useLazyScreen({
    externalRef: loading ? null : externalRef,
    once: false,
    distance: '10px'
  })

  const titleSearch = decodeURI(keyword)
  const title = `Search for ${titleSearch}`
  const metaDescription = `Search results for ${titleSearch}`
  useSeo({title, description: metaDescription})

  const handleClickNextGifs = useMemo(() => debounce(
    () => setPage(prevPage => prevPage + 1), 100
  ), [setPage])

  useEffect(() => {
    console.log(isShow)
    if(isShow) handleClickNextGifs()
  }, [isShow, handleClickNextGifs])

  return (
    <>
      <main>
        <h2 className='search__title'>{titleSearch}</h2>
        <section className='gifs__container'>
          <ListGifs gifs={gifs} loading={loading}/>
        </section>
        {/* Pagination button */}
        {/* <div className='gifs__more-container'>
          <button className='gifs__more-btn' onClick={handleClickNextGifs}>Load More</button>
        </div> */}

        {/* Element to observe and load more gifs - Infinite scroll */}
        {
          loading ? null : <div ref={externalRef}></div>
        }
      </main>
    </>
  )
}