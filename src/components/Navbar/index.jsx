import React from 'react'
import './styles.scss'

const Navbar = () => {
    return <header>
        <nav className='navbar'>
            <ul className='navbar-nav'>
                <li>
                    <a href='#'>Galleries</a>
                </li>
                <li>
                    <a href='#'>Search</a>
                </li>
                <li>
                <a href='#'>
                    <img src='/images/nasa-logo-black.png' alt=''/>
                </a>

                </li>
                <li>
                    <a href='#'>Favorites</a>
                </li>
                <li>
                    <a href='#'>About</a>
                </li>
            </ul>
        </nav>
    </header>
}

export default Navbar