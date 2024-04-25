import { useCallback } from 'react';
import { createContext, useState, useContext } from 'react'
import { loginService } from '../services/login';


const UserContext = createContext();


function UserProvider({ children }) {
  const [jwt, setJwt] = useState(null)

  const login = useCallback(({userName, password}) => {
    loginService({username: userName, password})
      .then(response => {
        const { token } = response;
        if(!token) return
        setJwt(token);
      })
      .catch(err => {
        console.err(err)
      })
  }, [setJwt])

  const logout = useCallback(() => {
    setJwt(null)
  }, [setJwt])

  const value = {
    isLogged: Boolean(jwt),
    login,
    logout
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