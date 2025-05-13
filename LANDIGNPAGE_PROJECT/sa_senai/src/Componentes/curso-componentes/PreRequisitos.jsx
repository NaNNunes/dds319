import {Col, Row, Card, Container, ListGroup} from "react-bootstrap";

import personIcon from "../../assets/icones/personicon.png";

const PreRequisitos = () => {
  return (
    <div>
        <Container>
            <Card className="m-auto p-3 text-center shadow">
                <Row className="mt-1">
                    <Col xs={1} className='mt-1 ms-4'>
                        <img src={personIcon} alt="" width="70px"/>
                    </Col>
                    <Col className="mt-4">
                        <Card.Title className="fs-2">
                            Pré-Requisitos
                        </Card.Title>
                    </Col>
                </Row>
                <Card.Body className="text-start" >
                    <ListGroup style={{textAlign:"justify"}} as="ul" variant='flush' className='rounded-1 shadow-sm'>
                        <ListGroup.Item action className="text-dark">
                            <p>Ter acesso à internet</p>
                        </ListGroup.Item>
                        <ListGroup.Item action className="text-dark">
                            <p>Ter idade mínima de 16 anos completos</p>
                        </ListGroup.Item>
                        <ListGroup.Item action className="text-dark">
                            <p>
                                Estar matriculado no 2º ano do ensino médio OU
                                ter concluído o ensino médio OU
                                estar matriculado na Educação de Jovens e Adultos (EJA) nível médio
                                OU ter sido aprovado em disciplinas de exames de massa de nível médio
                            </p>
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </Container>
    </div>
  )
}

export default PreRequisitos