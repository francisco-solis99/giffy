import Gif from "./Gif";
import Spin from "./Spin";

export function ListGifs({gifs, loading}){
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