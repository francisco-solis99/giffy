import giffyLogo from '/logo.svg'
import Home from '../pages/Home/Home'
import Search from '../pages/Search/Search'
import Detail from '../pages/Detail/Detail'
import { GifProvider } from '../context/GifContext'
import '../App.css'

import {Link, Route} from 'wouter'

/*
  TODO:
  - Context ✅
  - Search component
  - Styles to the last search ✅
  - Tendencies Component
  - Alias
  - Lazy loading tendencies
  - Detail page styles
*/

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
          path="/search/:keyword"/>

        <Route
          component={Detail}
          path="/gif/:id"/>
      </GifProvider>
    </>
  )
}

export default App;