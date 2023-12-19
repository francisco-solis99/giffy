import { useGifs } from "../hooks/useGifs";
import Gif from "./Gif";
import Spin from "./Spin";

export function ListGifs(){
  const { loading, gifs } = useGifs()

  return (
    <>
      {
        loading
          ? <Spin/>
          : gifs.map(({title, id, url}) => {
          return (
            <Gif key={id}
                 title={title}
                 url={url}
                 id={id}
            />
          )
        })
      }
    </>
  )
}