import { Link } from 'react-router-dom';
import logo from '/assets/images/Logo .svg';

export const Footer = () => {
    return (
        <footer>
            <section>
                <div className='company-info' data-aos='fade-up'>
                    <img src={logo} alt='Logo little lemon' />
                    <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
                </div>
                <div data-aos='fade-up'>
                    <h3>Important Links</h3>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>About</Link></li>
                        <li><Link to='/'>Menu</Link></li>
                        <li><Link to='/reservations'>Reservations</Link></li>
                        <li><Link to='/'>Order Online</Link></li>
                        <li><Link to='/'>Login</Link></li>
                    </ul>
                </div>
                <div data-aos='fade-up'>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br /> 123 Towncity, USA</li>
                        <li>Phone: <br /> ++ 0123 456 789</li>
                        <li>Address: <br /> little@lemon.com</li>
                    </ul>
                </div>
                <div data-aos='fade-up'>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/" target="_blank">Facebook</a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/" target="_blank" >Instagram</a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com/" target="_blank">Twitter</a>
                        </li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}
