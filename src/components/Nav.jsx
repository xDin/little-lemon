import { NavLink } from 'react-router-dom';
import Container from './Container';

function Nav() {
  return (
    <nav>
      <Container>
        <ul className="nav-list">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/menu">Menu</NavLink></li>
          <li><NavLink to="/booking">Reservations</NavLink></li>
          <li><NavLink to="/order">Order Online</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
        </ul>
      </Container>
    </nav>
  );
}

export default Nav;