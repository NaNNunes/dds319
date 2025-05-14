import React from 'react'

import { useContext } from "react";
import { AuthContext } from "../context/UserContext.jsx";
import { Navigate } from "react-router-dom";

import { Container } from 'react-bootstrap';

import Formulario from "../componentes/Formulario.jsx";

const EditarProduto = () => {

  const {usuarioNome} = useContext(AuthContext)
  if(usuarioNome === "Visitante") return <Navigate to="/login"/>

  return (
    <div style={{height:"91vh"}}>
      <Container>
        <h1>Cadastrar Produto</h1>
        <Formulario page="cadastro"/>
      </Container>
    </div>
  )
}

export default EditarProduto