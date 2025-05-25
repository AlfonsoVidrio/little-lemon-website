import { Link } from 'react-router-dom';

export const ConfirmedBooking = () => {
    return (
        <div className='confirm'>
            <h1>Booking has been <span>confirmed!</span></h1>

            <Link to='/'>
                <button className='btn-home'>Go back home</button>
            </Link>       
        </div>
    )
}
