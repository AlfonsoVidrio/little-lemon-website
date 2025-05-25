import { Link } from 'react-router-dom';
import bannerImg from '/assets/images/restauranfood.webp';

export const Header = () => {
    return (
        <header className='header animate__animated animate__fadeIn'>
            <section>
                <div className='banner animate__animated animate__backInLeft'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to='/booking'><button aria-label='On Click'>Reserve Table</button></Link>
                </div>
                <div className='banner-img animate__animated animate__backInRight'>
                    <img src={ bannerImg } alt='Image of food' />
                    
                </div>
            </section>
        </header>
    )
}
