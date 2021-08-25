
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <>
        <Navbar.Brand href="#home">To-Do App</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>

        </Nav>
      </>
    </Navbar>
  );
};

export default NavBar;
