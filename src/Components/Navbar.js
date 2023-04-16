import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//FONT AWESOME IMPORTS
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function navBar1() {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark" >  
      <Container className="container">
        <Navbar.Brand className="name" href="/">Jeneil Henry</Navbar.Brand>
        {/* <FontAwesomeIcon icon={faBars} style={{color: "#0564646",}} /> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="navLink" href="/">Home</Nav.Link>
            <Nav.Link className="navLink" href="/current">Current Project</Nav.Link>
            <Nav.Link className="navLink" href="/contact">Contact</Nav.Link>
            <NavDropdown title="Social Media Links" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">LinkedIn</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Instagram
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Facebook</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
