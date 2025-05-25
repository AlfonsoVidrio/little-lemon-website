import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export const Reservations = () => {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        const savedReservations = JSON.parse(localStorage.getItem("reservations")) || [];
        setReservations(savedReservations);
    }, []);

    const handleCancel = (idx) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to cancel this reservation?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedReservations = reservations.filter((_, i) => i !== idx);
                setReservations(updatedReservations);
                localStorage.setItem("reservations", JSON.stringify(updatedReservations));
                Swal.fire("Cancelled!", "Your reservation has been cancelled.", "success");
            }
        });
    };

    return (
        <div className='reservations-container'>
            <h2 className='reservations-title'>Saved Reservations</h2>
            {reservations.length === 0 ? (
                <p className='reservations-empty'>No reservations found.</p>
            ) : (
                <ul className='reservations-list'>
                    {reservations.map((reservation, idx) => (
                        <li className='reservation-item' key={idx}>
                            <span className='reservation-info'>
                                <strong>Date:</strong> {reservation.date} | <strong>Time:</strong> {reservation.times} | <strong>Guests:</strong> {reservation.guests} | <strong>Occasion:</strong> {reservation.occasion}
                            </span>
                            <button className='reservation-cancel-btn' onClick={() => handleCancel(idx)}>Cancel</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}