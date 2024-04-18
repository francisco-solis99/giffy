import Gif from "@components/Gif"
import { useSingleGif } from "@hooks/useSingleGif"
import Spinner from '@components/Spin'
import { Redirect } from "wouter"
import '../Detail/detail.css'

export default function Detail({ params }) {
  const { gif, status } = useSingleGif({id: params.id})
  console.log(status)
  if(status === 'loading') return <Spinner/>
  if(status === 'error') return <Redirect to="/404"/>

  return (
    <section className="detail-gif__wrapper">
      <Gif {...gif}/>
    </section>
  )
}
