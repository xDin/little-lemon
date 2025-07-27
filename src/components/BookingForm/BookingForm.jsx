import { useMemo, useState } from "react";
import "./BookingForm.css";

export default function BookingForm() {
  // Local state (will be lifted later)
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("Birthday");

  // For now, keep times locally as required by the exercise
  const [availableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00"]);

  // Block past dates
  const todayISO = useMemo(() => new Date().toISOString().slice(0, 10), []);

  function handleSubmit(e) {
    e.preventDefault();
    const payload = { date, time, guests: Number(guests), occasion };
    // Later: call API or lift state to parent
    console.log("Reservation submitted:", payload);
    alert("Reservation submitted! Check console for payload.");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="booking-form"
      style={{ display: "grid", gap: "1rem", maxWidth: 420 }}
      aria-labelledby="booking-title"
    >
      <h2 id="booking-title" style={{ margin: 0 }}>Reserve a table</h2>

      {/* Date */}
      <label htmlFor="res-date">Choose date</label>
      <input
        id="res-date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        min={todayISO}
        required
      />

      {/* Time */}
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        <option value="" disabled>
          Select a time
        </option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      {/* Guests */}
      <label htmlFor="guests">Number of guests</label>
      <input
        id="guests"
        type="number"
        min={1}
        max={10}
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
      />

      {/* Occasion */}
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button className="btn btn-yellow" type="submit">
        Submit reservation
      </button>
    </form>
  );
}
