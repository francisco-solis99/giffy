import giffyLogo from '/logo.svg'
import {Link} from 'wouter'

export default function Header() {
  const isLogged = false;

  return (
    <header className='header'>
      <nav className='header__nav'>
        <ul>
          <li>
            {
              isLogged
              ? (
                <button>Logout</button>
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
