import { useState } from 'react';
import './BookingForm.css'; 

export default function BookingForm({ availableTimes, dispatch, onSubmit, minDate }) {
  const [form, setForm] = useState({
    date: minDate,
    time: availableTimes?.[0] ?? '',
    guests: 2,
    occasion: 'None',
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));

    if (name === 'date') {
      // inform reducer so it recalculates slots for this date
      dispatch({ type: 'date', payload: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.time) return;
    onSubmit(form);
  };

  // keep selected time valid if list changed
  const timeOptions = availableTimes?.length ? availableTimes : [];

  return (
    <form onSubmit={handleSubmit} className="booking-form" style={{ display: 'grid', gap: '1rem', maxWidth: 420 }}>
      <label>
        Date
        <input
          type="date"
          name="date"
          value={form.date}
          min={minDate}
          onChange={onChange}
          required
        />
      </label>

      <label>
        Time
        <select
          name="time"
          value={timeOptions.includes(form.time) ? form.time : (timeOptions[0] ?? '')}
          onChange={onChange}
          required
        >
        {timeOptions.length === 0 ? (
          <option value="" disabled>No times available</option>
        ) : (
          timeOptions.map(t => <option key={t} value={t}>{t}</option>)
        )}
        </select>
      </label>

      <label>
        Guests
        <input
          type="number"
          name="guests"
          min="1"
          max="10"
          value={form.guests}
          onChange={onChange}
          required
        />
      </label>

      <label>
        Occasion
        <select name="occasion" value={form.occasion} onChange={onChange}>
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </label>

      <button type="submit" className="btn btn-yellow">Reserve</button>
    </form>
  );
}
