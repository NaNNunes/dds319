import {Col, Row, Card, Container, ListGroup} from "react-bootstrap";

const Documentos = () => {
  return (
    <div>
        <Container>
            <Card>
              <Row>
                <Col></Col>
                <Col></Col>
              </Row>
              <Card.Body>
                <ListGroup as="ul" action variant="flush">
                  <ListGroup.Item></ListGroup.Item>
                  <ListGroup.Item></ListGroup.Item>
                  <ListGroup.Item></ListGroup.Item>
                  <ListGroup.Item></ListGroup.Item>
                  <ListGroup.Item></ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
        </Container>
    </div>
  )
}

export default Documentos