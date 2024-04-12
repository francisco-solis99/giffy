import { useEffect } from 'react';
import getGifs from '@services/getGifs';
import { useGifContext } from '@context/GifContext';
import { useState } from 'react';


const INITIAL_PAGE = 0;
export function useGifs({keyword = null} = {}) {
  const [page, setPage] = useState(INITIAL_PAGE)
  const [loadingNextGifs, setLoadingNextGifs] = useState(false)
  const {loading, setLoading, gifs, setGifs} = useGifContext()

  // Use local storage to get the last search to get the key or the lastkeyword or random
  const keywordToUse = keyword || window.localStorage.getItem('lastKeyword');

  useEffect(() => {
    setLoading(true)
    getGifs({keyword: keywordToUse})
      .then(gifs => {
        setGifs(gifs)
        setTimeout(() => {
          setLoading(false)
        }, 800)
        // Save the last keyword if is passed
        if(keyword) window.localStorage.setItem('lastKeyword', keyword)
      })
  }, [keyword, setGifs, setLoading, keywordToUse])

  useEffect(() => {
    if(INITIAL_PAGE === page) return;

    setLoadingNextGifs(true)
    getGifs({keyword: keywordToUse, page})
      .then(nextGifs => {
        setGifs(prevGifs => [...prevGifs, ...nextGifs])
        setTimeout(() => {
          setLoadingNextGifs(false)
        }, 800)
      })
  }, [keywordToUse, setGifs, page])

  return {loading, gifs, loadingNextGifs, setPage}
}