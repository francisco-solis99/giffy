import giffyLogo from '/logo.svg'
import Home from '../pages/Home/Home'
import Search from '../pages/Search/Search'
import '../App.css'

import {Link, Route} from 'wouter'

/*
  TODO:
  - Organize the pages ✅
  - Organize the styles ✅
  - Add the popular cards list ✅
  - Add the search results page ✅
  - Add the details page
  - Fix styles ✅
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

      <Route
        component={Home}
        path="/"/>

      <Route
        component={Search}
        path="/search/:keyword"/>
    </>
  )
}

export default App;