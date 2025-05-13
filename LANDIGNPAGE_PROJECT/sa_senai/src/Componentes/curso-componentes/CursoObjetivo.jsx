

import {Col, Row, Card, Container} from "react-bootstrap";

import objetivoIcon from "../../assets/icones/objetivoicon.png"


const CursoObjetivo = () => {
  return (
    <Container className="rounded-2 my-4" >
        <Card className='m-auto p-3 text-center shadow'
            style={
                {
                    width:"100%",
                }
            }
        >
            <Row className='my-3'>
                <Col md={1} sm={1} xs={1}  className='mt-1 ms-4'>
                    <img src={objetivoIcon} alt="" width="70px" />
                </Col>
                <Col className='mt-4'>
                    <Card.Title className="fs-2">
                        Objetivo do Curso
                    </Card.Title>
                </Col>
            </Row>
            <Card.Body style={{textAlign:"justify"}}>
                O curso Técnico em Desenvolvimento de Sistemas têm como objetivos desenvolver
                e programar sistemas computacionais, atendendo normas e padrões de qualidade,
                usabilidade, integridade e segurança da informação.
            </Card.Body>
        </Card>
    </Container>
  )
}

export default CursoObjetivo