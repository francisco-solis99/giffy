import { useState, useEffect } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";
import Spin from "./Spin";

export function ListGifs({keyword = 'cruz azul'} = {}){
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

  if(loading) return <Spin/>

  return <>
    {
      !loading && gifs.map(({title, id, url}) => {
        return <Gif key={id}
        title={title}
        url={url}/>
      })
    }
  </>
}