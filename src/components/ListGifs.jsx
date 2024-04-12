import Gif from "./Gif";
import Spin from "./Spin";

export function ListGifs({gifs = [], loading = false} = {}){
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