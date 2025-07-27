import Container from './Container';
function Footer() {
  return (
    <footer>
      <Container>
        <p>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;