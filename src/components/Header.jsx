import { Link } from 'react-router-dom';
import Nav from './Nav';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEQRl2GVsQySSagwtC_hP89D7WD3c-iolcvw&s"
            alt="Little Lemon Logo"
          />
        </Link>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
