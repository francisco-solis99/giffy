import Gif from "./Gif";
import Spin from "./Spin";
import {useGifs} from '../hooks/useGifs.js';

export function ListGifs({keyword = 'random'} = {}){
  const {loading, gifs} = useGifs({keyword})

  return (
    <>
      {
        loading
          ? <Spin/>
          : gifs.map(({title, id, url}) => {
          return <Gif key={id}
          title={title}
          url={url}/>
        })
      }
    </>
  )
}