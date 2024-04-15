import { ListGifs } from '@components/ListGifs'
import { useGifs } from '@hooks/useGifs';
import { useLazyScreen } from '@hooks/useLazyScreen';
import './search.css'
import { useEffect, useRef } from 'react';
import debounce from "just-debounce-it";
import { useMemo } from 'react';

export default function Search({ params }) {
  const { keyword } = params;
  const {gifs, loading, setPage} = useGifs({keyword})
  // use the lazy loading hook
  const externalRef = useRef()
  const { isShow } = useLazyScreen({
    externalRef: loading ? null : externalRef,
    once: false,
    distance: '50px'
  })

  const handleClickNextGifs = useMemo(() => debounce(
    () => setPage(prevPage => prevPage + 1), 200
  ), [setPage])

  useEffect(() => {
    console.log(isShow)
    if(isShow) handleClickNextGifs()
  }, [isShow, handleClickNextGifs])

  return (
    <>
      <main>
        <h2 className='search__title'>{decodeURI(keyword)}</h2>
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