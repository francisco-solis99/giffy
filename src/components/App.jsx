import giffyLogo from '/logo.svg'
import Home from '@pages/Home/Home'
import Search from '@pages/Search/Search'
import Detail from '@pages/Detail/Detail'
import { GifProvider } from '@context/GifContext'
import '../App.css'

import {Link, Route} from 'wouter'

function App(){
  return (
    <>
      {/* Header */}
      <header className='header'>
        <Link to="/">
          <figure className='logo'>
            <img src={giffyLogo} alt="Logo Giffy" />
            <figcaption>Giffy</figcaption>
          </figure>
        </Link>
      </header>

      {/* List of gifs */}
      <GifProvider>
        <Route
          component={Home}
          path="/"/>

        <Route
          component={Search}
          path="/search/:keyword/:rating?"/>

        <Route
          component={Detail}
          path="/gif/:id"/>

        <Route
          component={() => <h1>404 Error ⚠️</h1>}
          path="/404"/>
      </GifProvider>
    </>
  )
}

export default App;