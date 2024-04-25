import { useState } from "react"
import { useLocation } from "wouter"
import { useUserContext } from "@context/UserContext"
import { useEffect } from "react"

export default function Login() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [, navigate] = useLocation()
  const { login, isLogged} = useUserContext()

  useEffect(() => {
    if(isLogged) navigate('/')
  }, [isLogged, navigate])

  const handleChangeUserName = (e) => {
    setUserName(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmitLogin = (e) => {
    e.preventDefault()
    login()
  }

  return (
    <form className="login__form" onSubmit={handleSubmitLogin}>
      <label htmlFor="username">
        <span>Username</span>
        <input type="text" name="username" value={userName} onChange={handleChangeUserName} required />
      </label>
      <label htmlFor="password">
        <span>Password</span>
        <input type="password" name="password" value={password} onChange={handleChangePassword} required />
      </label>
      <button type="submit">
        Login
      </button>
    </form>
  )
}
