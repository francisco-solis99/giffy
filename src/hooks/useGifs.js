import {useState, useEffect} from 'react';
import getGifs from '../services/getGifs';

export function useGifs({keyword} = {}){
  const [loading, setLoading] = useState(false)
  const [gifs, setGifs] = useState([]);

  // Use local storage to get the last search

  useEffect(() => {
    setLoading(true)
    // get the key or the lastkeyword or random
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
  }, [keyword])

  return {loading, gifs}
}