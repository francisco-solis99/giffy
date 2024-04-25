import giffyLogo from '/logo.svg'
import {Link} from 'wouter'
import { useUserContext } from '@context/UserContext'

export default function Header() {
  const { isLogged, logout } = useUserContext()

  const handleClickLogOut = () => {
    logout()
  }

  return (
    <header className='header'>
      <nav className='header__nav'>
        <ul>
          <li>
            {
              isLogged
              ? (
                <button onClick={handleClickLogOut}>Logout</button>
              )
              : (
                <Link to='/login'>Login</Link>
              )
            }
          </li>
        </ul>
      </nav>
      <Link to="/">
        <figure className='logo'>
          <img src={giffyLogo} alt="Logo Giffy" />
          <figcaption>Giffy</figcaption>
        </figure>
      </Link>
    </header>
  )
}
