import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './components/BookingForm/ConfirmedBooking';
import About from './components/About/About';
import ComingSoon from './components/ComingSoon/ComingSoon';

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
          <Route path="/about" element={<About />} />
          <Route path="/comingSoon" element={<ComingSoon />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
