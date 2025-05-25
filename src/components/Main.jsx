import { Route, Routes, useNavigate } from 'react-router-dom';
import { Booking } from './Booking';
import { useReducer } from 'react';
import { Header } from './Header';
import { ConfirmedBooking } from './ConfirmedBooking';
import { Reservations } from './Reservations';

export const Main = () => {

const seedRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

    const fetchAPI = function(date) {
        let result = [];
        let random = seedRandom(date.getDate());

        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };
    const submitAPI = function(formData) {
        if(!formData.date || !formData.times || !formData.guests || !formData.occasion) {
            return false;
        }
        return true;
    };
    
    const initialState = {availableTimes: fetchAPI(new Date())};
    const [state, dispatch] = useReducer(updateTimes, initialState);

function updateTimes(state, date) {
    const d = (date instanceof Date) ? date : new Date(date);
    return { availableTimes: fetchAPI(d) };
}

    const navigate = useNavigate();
    const submitForm  = (formDate) => {
        if (submitAPI(formDate)) {
            navigate('/confirmed');
        } else {
            alert('Please fill in all fields.');
        }
    }
    
    return (
        <main>
            <Routes>
                <Route path='/' element={<Header/>}/>
                <Route path='/booking' element={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm} />} />
                <Route path='/reservations' element={<Reservations /> } />
                <Route path="/confirmed" element={<ConfirmedBooking />} />
            </Routes>
        </main>
    )
}
