import { Route} from 'wouter'

import Home from '@pages/Home/Home'
import Search from '@pages/Search/Search'
import Detail from '@pages/Detail/Detail'
import Login from '@pages/Login/Login'
import Header from '@components/Header'

import { GifProvider } from '@context/GifContext'
import { UserProvider }  from '@context/UserContext'

import '../App.css'


function App(){

  return (
    <>
      <UserProvider>
        {/* Header */}
        <Header/>

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
            component={Login}
            path="/login"/>

          <Route
            component={() => <h1>404 Error ⚠️</h1>}
            path="/404"/>
        </GifProvider>
      </UserProvider>
    </>
  )
}

export default App;

/*
TODOS:
[✅] Add the header nav component
[✅] Add login route
[✅] Add login page
[✅] create the user context
[✅] Wrapped the APP with UserContext provider
[✅] create custom hook useUser
[✅] use the useUser hook in Login page
[✅] create the logout
[✅] connect login to api
[✅] Fix api
[✅] Add loading and error state to login page
[] Create the favorite actions component
[] Save jwt in sessionStorage
[] Add login page styles
[] Test favorite and unfavorite
[] Add favorites section to home page




*/