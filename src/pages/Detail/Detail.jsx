import Gif from "@components/Gif"
// import { useGifContext } from "../../context/GifContext"
import { useGifs } from "@hooks/useGifs"

export default function Detail({ params }) {
  const { gifs } = useGifs()

  const gifSelected = gifs.find(singleGif => singleGif.id === params.id)

  // TODO: A fallbaclk if the gif is not in the gifs list, calll the API service to get the single gif

  return (
    <Gif {...gifSelected}/>
  )
}
