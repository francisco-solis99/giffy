import { ListGifs } from '../../components/ListGifs'
import {useGifs} from '../../hooks/useGifs';

export default function Search({params}) {
  const {keyword} = params;
  const {loading, gifs} = useGifs({keyword})

  return (
    <>
      <main>
        <section className='gifs__container'>
          <ListGifs gifs={gifs} loading={loading}/>
        </section>
      </main>
    </>
  )
}