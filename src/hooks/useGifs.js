import {useEffect} from 'react';
import getGifs from '../services/getGifs';
import {useGifContext} from '../context/GifContext';



export function useGifs({keyword} = {}){
  const {loading, setLoading, gifs, setGifs} = useGifContext()

  useEffect(() => {
    setLoading(true)
    // Use local storage to get the last search to get the key or the lastkeyword or random
    const keywordToUse = keyword || window.localStorage.getItem('lastKeyword');

    getGifs({keyword: keywordToUse === 'undefined' ? 'random' : keywordToUse})
      .then(gifs => {
        setGifs(gifs)
        setTimeout(() => {
          setLoading(false)
        }, 800)
        // Save the last keyword
        window.localStorage.setItem('lastKeyword', keyword)
      })
  }, [keyword, setGifs, setLoading])

  return {loading, gifs}
}