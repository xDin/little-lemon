import BookingForm from "../components/BookingForm/BookingForm.jsx";

export default function BookingPage() {
  return (
    <section className="specials">
      <div className="container">
        <header className="specials-header" style={{ marginTop: "2rem" }}>
          <h1 className="specials-title">Book a table</h1>
        </header>

        <BookingForm />

        {/* Optional: supporting copy / imagery */}
        {/* <p>We’ll email you a confirmation once submitted.</p> */}
      </div>
    </section>
  );
}
