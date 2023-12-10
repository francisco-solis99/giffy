import {useState, useEffect} from 'react';
import getGifs from '../services/getGifs';

export function useGifs({keyword} = {}){
  const [loading, setLoading] = useState(false)
  const [gifs, setGifs] = useState([]);

  // Use local storage to get the last search


  useEffect(() => {
    setLoading(true)
    // get the key or the lastkeyword or random
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random';

    getGifs({keyword: keywordToUse})
      .then(gifs => {
        setGifs(gifs)
        // Sve the last keyword
        localStorage.setItem('lastKeyword', keyword)
        setTimeout(() => {
          setLoading(false)
        }, 800)
      })
  }, [keyword])

  return {loading, gifs}
}