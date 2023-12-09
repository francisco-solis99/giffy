import { ListGifs } from '../../components/ListGifs'

export default function Search({params}) {
  return (
    <>
      <main>
        <section className='gifs__container'>
          <ListGifs keyword={params.keyword}/>
        </section>
      </main>
    </>
  )
}