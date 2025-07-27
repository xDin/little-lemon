export default function SpecialCard({ title, price, img, desc }) {
  return (
    <article className="card">
      <img src={img} alt={title} className="card-img" />
      <div className="card-body">
        <div className="card-title-row">
          <h3 className="card-title">{title}</h3>
          <span className="card-price">${price.toFixed(2)}</span>
        </div>
        <p className="card-desc">{desc}</p>
        <a className="card-cta" href="/order">Order a delivery 🛵</a>
      </div>
    </article>
  );
}