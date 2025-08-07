import SpecialCard from "./SpecialCard.jsx";
import './Specials.css';

const specials = [
  {
    id: 1,
    title: "Greek salad",
    price: 12.99,
    img: "/images/Greek-Salad.webp",
    desc:
      "Crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with garlic and rosemary croutons."
  },
  {
    id: 2,
    title: "Bruschetta",
    price: 5.99,
    img: "/images/Bruschetta.avif",
    desc:
      "Grilled bread smeared with garlic and seasoned with salt and olive oil."
  },
  {
    id: 3,
    title: "Lemon Dessert",
    price: 5.00,
    img: "/images/lemonDessert.jpg",
    desc:
      "From grandma’s recipe book; every ingredient is sourced and authentic."
  }
];

export default function SpecialsSection() {
  return (
    <section className="specials">
      <div className="container">
        <div className="specials-header">
          <h2 className="specials-title">This weeks specials!</h2>
          <a className="btn btn-yellow" href="/menu">Online Menu</a>
        </div>

        <div className="specials-grid">
          {specials.map(item => (
            <SpecialCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}