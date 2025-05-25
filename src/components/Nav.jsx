import { useState } from 'react';
import logo from '/assets/images/Logo .svg';
import { Link } from 'react-router-dom';

export const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const closeMenu = () => {
        setMenuOpen(false);
    }

    return (
        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
            <Link to='/' className='logo' onClick={closeMenu}>
                <img className='logo animate__animated animate__fadeIn' src={ logo } alt='logo' />
            </Link>

            {/* menu hamburger */}
            <div className='menu-icon animate__animated animate__fadeIn' onClick={toggleMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>

            {/* nav items */}
            <ul className={`nav-links ${menuOpen ? 'visible': ''} animate__animated animate__fadeIn`}>
                <li>
                    <Link to='/' onClick={closeMenu}>Home</Link>
                </li>
                <li>
                    <Link to='/' onClick={closeMenu}>About</Link>
                </li>
                <li>
                    <Link to='/' onClick={closeMenu}>Menu</Link>
                </li>
                <li>
                    <Link to='/reservations' onClick={closeMenu}>Reservation</Link>
                </li>
                <li>
                    <Link to='/' onClick={closeMenu}>Order Online</Link>
                </li>
                <li>
                    <Link to='/' onClick={closeMenu}>Login</Link>
                </li>
            </ul>
        </nav>
    )
}