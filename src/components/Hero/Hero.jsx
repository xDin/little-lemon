// src/components/Hero/Hero.jsx
import Container from '../Container';
import './Hero.css'; // if you have separate styles

function Hero() {
  return (
    <section className="hero">
      <Container>
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant,
            focused on traditional recipes served with a modern twist.
          </p>
          <button>Reserve a Table</button>
        </div>
        <div className="hero-image">
          <img
            src="images/pic.png"
            alt="Little Lemon Restaurant"
          />
        </div>
      </Container>
    </section>
  );
}

export default Hero;
