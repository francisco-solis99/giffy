import { ListGifs } from '../../components/ListGifs'

export default function Search({params}) {
  return (
    <>
      <main>
        <div className='gifs__container'>
          <ListGifs keyword={params.keyword}/>
        </div>
      </main>
    </>
  )
}