import { useCallback } from 'react';
import { createContext, useState, useContext } from 'react'


const UserContext = createContext();


function UserProvider({ children }) {
  const [jwt, setJwt] = useState(null)

  const login = useCallback(() => {
    setJwt('test')
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