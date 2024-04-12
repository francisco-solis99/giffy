import Gif from "@components/Gif"
// import { useGifContext } from "../../context/GifContext"
import { useGifs } from "@hooks/useGifs"
import '../Detail/detail.css'

export default function Detail({ params }) {
  const { gifs } = useGifs()

  const gifSelected = gifs.find(singleGif => singleGif.id === params.id)

  // TODO: A fallbaclk if the gif is not in the gifs list, calll the API service to get the single gif

  return (
    <section className="detail-gif__wrapper">
      <Gif {...gifSelected}/>
    </section>
  )
}
