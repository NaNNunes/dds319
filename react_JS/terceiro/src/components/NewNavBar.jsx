import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { NavLink } from "react-router-dom";
import styles from "./css/NavBar.module.css";

import Button from 'react-bootstrap/Button'
function NavBarra() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>

        <Navbar.Brand href="/home">
          <img
              alt=""
              src="./vite.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
          />{' '}
          Home
        </Navbar.Brand>
        <Navbar.Brand href="#home">Menu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/sobre">Sobre</Nav.Link>
            <Nav.Link href="/cadastro">Cadastro</Nav.Link>
            <NavDropdown title="Mais" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              <NavDropdown.Item href="/erro">Pagina Erro</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Contate nos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav>
            <Navbar.Text className='mx-2'>Sair: </Navbar.Text>
            <Button variant='danger'>Siii!!</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarra;