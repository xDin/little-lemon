export default function BookingSlots({ availableTimes, onBook }) {
  if (!availableTimes?.length) {
    return <p>No available times for the selected date.</p>;
  }

  return (
    <section>
      <h2>Available times</h2>
      <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '0.75rem' }}>
        {availableTimes.map(t => (
          <li key={t}>
            <button
              type="button"
              onClick={() => onBook(t)}
              style={{ width: '100%' }}
              className="btn"
            >
              {t}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
