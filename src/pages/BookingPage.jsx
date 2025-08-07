
import { useReducer, useMemo } from 'react';
import BookingForm from '../components/BookingForm/BookingForm';
import BookingSlots from '../components/BookingForm/BookingSlots';
import { useNavigate } from 'react-router-dom';

/* global fetchAPI, submitAPI */

// --- reducer ---
function updateTimes(state, action) {
  switch (action.type) {
    case 'date':
      // calculate available slots for the selected date
      return fetchAPI(new Date(action.payload));
    case 'book':
      // remove the booked time from availability
      return state.filter(t => t !== action.payload);
    default:
      return state;
  }
}

// --- initializer ---
function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

export default function BookingPage() {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(updateTimes, undefined, initializeTimes);

  const todayStr = useMemo(() => new Date().toISOString().slice(0, 10), []);

  const submitForm = (formData) => {
  const success = submitAPI(formData);
  if (success) {
    // ✅ Save booking to localStorage
    const previous = JSON.parse(localStorage.getItem('bookings')) || [];
    const updated = [...previous, formData];
    localStorage.setItem('bookings', JSON.stringify(updated));

    // ✅ Navigate to confirmation page
    navigate('/confirmed');
  } else {
    alert('Something went wrong with your booking.');
  }
};


  return (
    <main className="container" style={{ padding: '4rem 0' }}>
      <h1>Book a table</h1>

      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        onSubmit={submitForm}
        minDate={todayStr}
      />

      <hr style={{ margin: '3rem 0' }} />

      <BookingSlots
        availableTimes={availableTimes}
        onBook={(time) => {
          dispatch({ type: 'book', payload: time });
          alert(`Table booked for today at ${time}`);
        }}
      />
    </main>
  );
}
