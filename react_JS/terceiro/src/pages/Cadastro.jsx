import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
const Cadastro = () => {
  return (
    <div>
        <Row className='mt-3'>
          <Col>
            <FloatingLabel
              controlId="floatingNome"
              label="Nome"
              className="mb-3"
            >
              <Form.Control type="text" placeholder='' size='lg'/>
            </FloatingLabel>
          </Col>
        
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="E-mail"
              className="mb-3"
            >
              <Form.Control type="e-mail" placeholder=''/>
            </FloatingLabel>
          </Col>
        </Row>
        <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="password" placeholder="" />
            </FloatingLabel>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Multiple files input example</Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>

      <Form.Select aria-label="Default select example">
        <option>Selecione algo</option>
        <option value="adm">ADM</option>
        <option value="op">Operador</option>
        <option value="solicitante">Solicitante</option>
    </Form.Select>

      <Button variant="dark" className='mt-3'>Cadastrar</Button>
    </div>
  );
};

export default Cadastro;
