import Container from '../Container';
import './About.css';

function AboutPage() {
  return (
    <section className="about">
      <Container>
        <div className="about-content">
          <h1>About Little Lemon</h1>
          <p>
            At Little Lemon, we bring the warmth of the Mediterranean to the heart of Chicago.
            Our journey began with a passion for fresh ingredients, bold flavors, and a commitment
            to hospitality that feels like home.
          </p>
          <p>
            Whether you're stopping by for a quick lunch, a romantic dinner, or a family celebration,
            our menu offers something for everyone, from traditional favorites to creative seasonal specials.
          </p>
          <p>
            We take pride in sourcing locally whenever possible, and all of our dishes are made with care by chefs
            who love what they do. Our team is dedicated to making every guest feel welcome, whether it’s your first visit or your fiftieth.
          </p>
        </div>
        <div className="about-image">
          <img
            src="images/about-us.jpg"
            alt="Our team at Little Lemon"
          />
        </div>
      </Container>
    </section>
  );
}

export default AboutPage;
