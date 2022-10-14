import { Button, Nav, Navbar } from "react-bootstrap";
import { useTheme } from "../Context/ThemeContext";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

const TopNavbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Navbar bg={theme} variant={theme}>
      <Container>
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to={"/home"}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to={"/features"}>
            Features
          </Nav.Link>
          <Nav.Link as={Link} to={"/pricing"}>
            Pricing
          </Nav.Link>
        </Nav>
        <Button onClick={toggleTheme} variant="outline-primary">
          Toggle Theme
        </Button>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
