import { useState } from 'react';

export const BookingForm = (props) => {
    const [date, setDate] = useState('');
    const [times, setTimes] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const reservation = {
            date,
            times,
            guests,
            occasion
        };
        const savedReservations = JSON.parse(localStorage.getItem("reservations")) || [];
        savedReservations.push(reservation);
        localStorage.setItem("reservations", JSON.stringify(savedReservations));
        props.submitForm(reservation);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }
    return (
        <header className="animate__animated animate__fadeIn">
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div className="form-input">
                            <label htmlFor="book-date">Choose Date</label>
                            <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)} type="date" required />
                        </div>
                        {/* for time selection */}
                        <div className="form-input">
                            <label htmlFor="book-time">Choose Time</label>
                            <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)} required>
                                <option value="">Select a Time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => { return <option key={availableTimes}>{availableTimes}</option> })
                                }
                            </select>
                        </div>

                        {/* for number of guests */}
                        <div className="form-input">
                            <label htmlFor="book-guests">Number of Guests:</label>
                            <input id='book-guests' min='1' value={guests} onChange={(e) => setGuests(e.target.value)} required />
                        </div>

                        {/* Occasion field */}
                        <div className="form-input">
                            <label htmlFor="book-occasion">Occasion:</label>
                            <select id="book-occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                                <option value="">Select an Occasion</option>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                                <option>Engagement</option>
                            </select>
                        </div>
                        {/* submit button */}
                        <div className="btnReceive">
                            <input aria-label='On Click' type='submit' value={'Make Your Reservation'} />
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    )
}