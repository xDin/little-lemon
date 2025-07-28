/* global fetchAPI, submitAPI */

import { useReducer, useMemo } from 'react';
import BookingForm from '../components/BookingForm/BookingForm';
import BookingSlots from '../components/BookingForm/BookingSlots';

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
  const [availableTimes, dispatch] = useReducer(updateTimes, undefined, initializeTimes);

  // (optional) memo: today min date in input
  const todayStr = useMemo(() => new Date().toISOString().slice(0, 10), []);

  const handleSubmit = (formData) => {
    // book the chosen time
    dispatch({ type: 'book', payload: formData.time });
    // here you’d also POST to a backend, then navigate/confirm
    alert(`Table booked for ${formData.date} at ${formData.time}`);
  };

  return (
    <main className="container" style={{ padding: '4rem 0' }}>
      <h1>Book a table</h1>

      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        onSubmit={handleSubmit}
        minDate={todayStr}
      />

      <hr style={{ margin: '3rem 0' }} />

      <BookingSlots
        availableTimes={availableTimes}
        onBook={(time) => {
          dispatch({ type: 'book', payload: time });
          alert(`Table booked for today at ${time}`); // or pass the real date if needed
        }}
      />

    </main>
  );
}
