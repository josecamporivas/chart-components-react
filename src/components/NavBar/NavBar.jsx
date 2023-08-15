import { Link } from 'react-router-dom'
import './styleNavBar.css'

export default function NavBar(){
    return (
        <nav className='navBar'>
          <Link to='/' className='homeLink'>
            <img className='icon' src='/arrowLeft.svg' alt='return home' />
            <p>Home</p>
          </Link>
        </nav>
    )
}

