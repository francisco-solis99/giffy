import {useState, useEffect} from 'react';
import getGifs from '../services/getGifs';

export function useGifs({keyword} = {}){
  const [loading, setLoading] = useState(false)
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setLoading(true)
    getGifs(keyword)
      .then(gifs => {
        setGifs(gifs)
        setTimeout(() => {
          setLoading(false)
        }, 800)
      })
  }, [keyword])

  return {loading, gifs}
}