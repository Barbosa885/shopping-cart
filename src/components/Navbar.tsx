import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";

export function Navbar(){
  return ( 
  <NavbarBs className="bg-white shadow-sm mb-1">
    <Container> 
      <Nav className="me-auto">
        <Nav.Link to="/" as={NavLink}>
          Home
        </Nav.Link>
        <Nav.Link to="/about" as={NavLink}>
          Store 
        </Nav.Link>
        <Nav.Link to="/store" as={NavLink}>
          About
        </Nav.Link>
      </Nav>
      <Button type="button" className="btn btn-outline-primary ">
        <BsCart3 size={34} />
      </Button>
    </Container>
  </NavbarBs>
  );
}

