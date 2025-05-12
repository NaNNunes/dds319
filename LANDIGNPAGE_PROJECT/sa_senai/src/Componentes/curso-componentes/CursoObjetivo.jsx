import React from 'react'

import {Col, Row, Card, Container} from "react-bootstrap";

import objetivoIcon from "../../assets/icones/objetivoicon.png"
import ddsImg from "../../assets/ddsimg.png";

const CursoObjetivo = () => {
  return (
    <Container 
        style={
            {
                height:"400px",
                paddingBottom:"100px",
                top:"10px",
                position:"relative",
                background:`bottom/100% url(${ddsImg})`
            }
        }
    >
        <Row 
            style={
                {
                    color:"white",
                    height:"4rem",
                    background:"linear-gradient(to right, #FC5707, #51199E)"
                }
            }
        >
            <Col>
                Técninco em Desenvolvimento de Sistemas
            </Col>
        </Row>
        <Card className='m-auto p-3 text-center'
            style={
                {
                    display:"flex",
                    position:"absolute",
                    width:"95%",
                    top:"300px",
                    margin:"auto"
                }
            }
        >
            <Row className='my-3'>
                <Col md={1} sm={1} xs={1}  className='mt-1 ms-5'>
                    <img src={objetivoIcon} alt="" width="80px" />
                </Col>
                <Col className='mt-4 '>
                    <h3>
                        Objetivo do Curso
                    </h3>
                </Col>
            </Row>
            <Row className='m-auto'>
                <Col style={{textAlign:"justify"}}>
                    O curso Técnico em Desenvolvimento de Sistemas têm como objetivos desenvolver
                    e programar sistemas computacionais, atendendo normas e padrões de qualidade,
                    usabilidade, integridade e segurança da informação.
                </Col>
            </Row>
        </Card>
    </Container>
  )
}

export default CursoObjetivo