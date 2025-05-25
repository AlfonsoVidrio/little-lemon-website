import { BookingForm } from './BookingForm';

export const Booking = (props) => {
    return (
        <BookingForm
            availableTimes={props.availableTimes}
            dispatch={props.dispatch}
            submitForm={props.submitForm}
        />
    )
}
