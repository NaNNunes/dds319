import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CursoObjetivo from '../Componentes/curso-componentes/CursoObjetivo.jsx';
import PreRequisitos from '../Componentes/curso-componentes/PreRequisitos.jsx';
import Documentos from '../Componentes/curso-componentes/Documentos.jsx';

import ddsImg from "../assets/ddsimg.png";

const DevSys = () => {
  return (
    <Container>
      <Row>
        <Col lg={6} md={12}>
          <Container
            style={
                {
                  marginTop:"1rem",
                  height:"400px",
                  background:`bottom/100% url(${ddsImg})`,
                  borderRadius:"10px",
                  boxShadow:"2px 3px 4px black"
                }
            }
          >
            <Row
                className="fs-3 fw-bold text-center text-uppercase rounded-top-2"
                style={
                    {
                      padding:"1rem 1rem 1.5rem",
                      marginBottom:"1rem",
                      color:"white",
                      background:"linear-gradient(to right, #FC5707, #51199E)"
                    }
                }
            >
              <Col>
                Técnico em Desenvolvimento de Sistemas
              </Col>
            </Row>
            <Col>
                <CursoObjetivo  />
            </Col>
            <Col >
                  <PreRequisitos/>
            </Col>
          </Container>
        </Col>
        <Col>
          <Container>
            <Documentos/>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default DevSys