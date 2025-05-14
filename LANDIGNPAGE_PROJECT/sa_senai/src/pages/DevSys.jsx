import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ObjetivoDocumentos from '../Componentes/curso-componentes/ObjetivoDocumentos.jsx';
import PreRequisitosConteudo from '../Componentes/curso-componentes/PreRequisitosConteudo.jsx';

import CardCursoDetalhado from '../Componentes/card-curso/CardCursoDetalhado.jsx';

import ddsImg from "../assets/ddsimg.png";

const DevSys = () => {
  return (
    <Container>
      <Row className='d-flex flex-row-reverse'>
        <Col lg={6} xs={12}>
          <ObjetivoDocumentos/>
        </Col>
        <Col lg={6} xs={12}>
            <CardCursoDetalhado/>
            <PreRequisitosConteudo/>
        </Col>
      </Row>
    </Container>
  )
}

export default DevSys