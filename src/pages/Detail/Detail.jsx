import { useSingleGif } from "@hooks/useSingleGif"
import { useSeo } from "@hooks/useSeo"
import Gif from "@components/Gif"
import Spinner from '@components/Spin'
import { Redirect } from "wouter"
import '../Detail/detail.css'

export default function Detail({ params }) {
  const { gif, status } = useSingleGif({id: params.id})
  const descriptionPage = `Deatils for ${gif?.title ?? ''}`
  useSeo({title: gif?.title ?? 'Laoding results', description: descriptionPage})

  if(status === 'loading') return <Spinner/>
  if(status === 'error') return <Redirect to="/404"/>


  return (
    <section className="detail-gif__wrapper">
      <Gif {...gif}/>
    </section>
  )
}
