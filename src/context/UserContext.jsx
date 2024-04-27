import { useCallback } from 'react';
import { createContext, useState, useContext } from 'react'
import { loginService } from '../services/login';
import { addFavoriteService } from '../services/addToFavorites'
import { getFavoritesService } from '../services/getFavorites'
import { useEffect } from 'react';


const UserContext = createContext();


function UserProvider({ children }) {
  const [jwt, setJwt] = useState(null)
  const [favs, setFavs] = useState([])
  const [status, setStatus] = useState({
    loading: false,
    error: false
  })


  useEffect(() => {
    if(!jwt) return setFavs([])
    getFavoritesService({jwt})
      .then(response => {
        const { favorites } = response;
        setFavs(() => favorites)
      })
  }, [jwt])

  const login = useCallback(({userName, password}) => {
    setStatus({loading: true, error: false})
    loginService({username: userName, password})
      .then(response => {
        const { token } = response;
        if(!token) return
        setJwt(token);
        setStatus({loading: false, error: false})
      })
      .catch(err => {
        setStatus({loading: false, error: true})
        console.err(err)
      })
  }, [setJwt])

  const logout = useCallback(() => {
    setJwt(null)
  }, [setJwt])

  const addToFavorites = useCallback(({ id }) => {
    addFavoriteService({ id, jwt}).then(response => {
        const {favorites: favoritesUpdated} = response;
        setFavs(() => favoritesUpdated)
      })
      .catch(err => {
        setStatus({loading: false, error: true})
        console.err(err)
      });
  }, [setFavs, jwt])

  const value = {
    isLogged: Boolean(jwt),
    hasLoading: status.loading,
    hasError: status.error,
    favs,
    login,
    logout,
    addToFavorites
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

function useUserContext(){
  const context = useContext(UserContext)

  if(!context) {
    throw new Error('useUserContext must be used within a UserProvider')
  }

  return context;
}

export { UserProvider, useUserContext}