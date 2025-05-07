import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import { BsShop } from "react-icons/bs";
import Button from 'react-bootstrap/Button';

import { useContext } from 'react';
import { AuthContext } from "../context/UserContext";

const BarraNav = () => {
  const {usuarioNome, logout} = useContext(AuthContext);

  return (
    <div>
      <Navbar expand="lg" bg='success' data-bs-theme="dark">
        <Container>
          <Navbar.Brand href='/home'>
            <BsShop size="1.5em" color='white' className='me-2'/>
            CRUD
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='minha-nav'/>
          <Navbar.Collapse id='minha-nav'>
            <Nav className="me-auto">
              <Nav.Link href="/home">
                Produto
              </Nav.Link>
              <Nav.Link hrf="/cadastrar-produto">
                Cadastro
              </Nav.Link>
              <Nav.Link>
              </Nav.Link>
            </Nav>
            <Nav className='justify-content-end'>
              <Navbar.Text style={{color:"white", marginRight:"5px"}}>
                Usuário: {usuarioNome} 
              </Navbar.Text>
              {
                usuarioNome === "Visitante" 
                  ? 
                    (
                      <>
                        <Button variant='primary' href='/login'>Entrar</Button>
                      </>
                    )
                  :
                    (
                      <>
                        <Button variant='danger' href='/home' onClick={logout}>Sair</Button>
                      </>
                    )
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default BarraNav