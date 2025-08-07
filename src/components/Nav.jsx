import { NavLink } from 'react-router-dom';
import Container from './Container';

function Nav() {
  return (
    <nav>
      <Container>
        <ul className="nav-list">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/comingSoon">Menu</NavLink></li>
          <li><NavLink to="/booking">Reservations</NavLink></li>
          <li><NavLink to="/comingSoon">Order Online</NavLink></li>
          <li><NavLink to="/comingSoon">Login</NavLink></li>
        </ul>
      </Container>
    </nav>
  );
}

export default Nav;