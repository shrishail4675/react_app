import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import "./Header.css";
import logo from "../../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {

  // MOBILE NAVBAR STATE
  const [expanded, setExpanded] = useState(false);

  // DROPDOWN STATE
  const [showDropdown, setShowDropdown] = useState(false);

  // CLOSE NAVBAR AFTER CLICK
  const closeNavbar = () => {
    setExpanded(false);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar expand="lg" expanded={expanded} className={`header ${scrolled ? "scrolled" : ""}`}>
      <Container fluid>

        {/* LOGO */}
        <Navbar.Brand as={Link} to="/" onClick={closeNavbar}>
          <img src={logo} alt="Logo" className="logo-img height-100" />
        </Navbar.Brand>

        {/* HAMBURGER */}
        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          onClick={() => setExpanded(!expanded)}
        />

        {/* OFFCANVAS */}
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          show={expanded}
          onHide={() => setExpanded(false)}
        >
          <Offcanvas.Header closeButton closeVariant="black">
            <Offcanvas.Title id="offcanvasNavbarLabel">
              InfotechMinds
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body className="nav-menu-margin">

            <Nav className="justify-content-end flex-grow-1">

              {/* HOME */}
              <Nav.Link
                className="nav-font-color me-5"
                as={Link}
                to="/"
                onClick={closeNavbar}
              >
                Home
              </Nav.Link>

              {/* SERVICES DROPDOWN */}
              <NavDropdown className="me-5"
                title={<span className="nav-font-color">Services</span>}
                id="offcanvasNavbarDropdown"
                show={showDropdown}

                // HOVER FOR DESKTOP
                onMouseEnter={() => {
                  if (window.innerWidth > 991) {
                    setShowDropdown(true);
                  }
                }}

                onMouseLeave={() => {
                  if (window.innerWidth > 991) {
                    setShowDropdown(false);
                  }
                }}

                // CLICK FOR MOBILE
                onClick={() => {
                  if (window.innerWidth <= 991) {
                    setShowDropdown(!showDropdown);
                  }
                }}
              >

                <NavDropdown.Item
                  as={Link}
                  className="nav-font-color"
                  to="/services/web-development"
                  onClick={closeNavbar}
                >
                  Website Development
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  className="nav-font-color"
                  to="/services/mobile-apps"
                  onClick={closeNavbar}
                >
                  Mobile App Development
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  className="nav-font-color"
                  to="/services/devops"
                  onClick={closeNavbar}
                >
                  DevOps & CI/CD
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  className="nav-font-color"
                  to="/services/ui-ux"
                  onClick={closeNavbar}
                >
                  UI/UX & Graphic Design
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  className="nav-font-color"
                  to="/services/ai-ml"
                  onClick={closeNavbar}
                >
                  Artificial Intelligence & Machine Learning
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  className="nav-font-color"
                  to="/services/maintenance"
                  onClick={closeNavbar}
                >
                  Maintenance & Support
                </NavDropdown.Item>

              </NavDropdown>

              {/* ABOUT */}
              <Nav.Link
                className="nav-font-color me-5"
                as={Link}
                to="/about"
                onClick={closeNavbar}
              >
                About
              </Nav.Link>



              {/* CONTACT */}
              <Nav.Link
                as={Link}
                className="nav-font-color me-5"
                to="/contact"
                onClick={closeNavbar}
              >
                Contact
              </Nav.Link>

            </Nav>

          </Offcanvas.Body>
        </Navbar.Offcanvas>

      </Container>
    </Navbar>
  );
}

export default Header;