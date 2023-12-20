import { useGifs } from "../hooks/useGifs";
import Gif from "./Gif";
import Spin from "./Spin";

export function ListGifs({keyword = ''} = {}){
  const { loading, gifs } = useGifs({keyword})

  return (
    <>
      {
        loading
          ? <Spin/>
          : (
              gifs.map(({title, id, url}) => (
                  <Gif key={id}
                      title={title}
                      url={url}
                      id={id}
                  />
                )
              )
            )
      }
    </>
  )
}