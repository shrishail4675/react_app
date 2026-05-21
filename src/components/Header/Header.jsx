import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Header.css";
import logo from "../../assets/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <Navbar expand="lg" >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" className="logo-img height-100" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              InfotechMinds
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>

              {/* SERVICES DROPDOWN */}
              <NavDropdown title="Services" id="offcanvasNavbarDropdown">
                <NavDropdown.Item as={Link} to="/services/web-development">
                  Website Development
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/services/mobile-apps">
                  Mobile App Development
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/services/devops">
                  DevOps & CI/CD
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/services/ui-ux">
                  UI/UX & Graphic Design
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/services/ai-ml">
                  Artificial Intelligence & Machine Learning
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/services/maintenance">
                  Maintenance & Support
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 h-75"
                aria-label="Search"
              />
              <Button className="d-flex align-items-center justify-content-center h-75 btn secondary">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;