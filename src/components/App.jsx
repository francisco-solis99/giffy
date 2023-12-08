import giffyLogo from '/logo.svg'
import { ListGifs } from './ListGifs'
import '../App.css'

function App(){
  return (
    <>
      {/* Header */}
      <header className='header'>
        <figure className='logo'>
          <img src={giffyLogo} alt="Logo Giffy" />
          <figcaption>Giffy</figcaption>
        </figure>
      </header>

      {/* List of gifs */}
      <main>
        <div className='gifs__container'>
          <ListGifs keyword='Selena Gomez'/>
        </div>
      </main>
    </>
  )
}

export default App;