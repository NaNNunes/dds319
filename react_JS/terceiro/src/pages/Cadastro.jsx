import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
const Cadastro = () => {
  return (
    <div>
      <FloatingLabel
        controlId="floatingNome"
        label="Nome"
        className="mb-3"
      >
        <Form.Control type="text" placeholder='' size='lg'/>
      </FloatingLabel>

      <FloatingLabel 
        controlId="floatingInput"
        label="E-mail"
        className="mb-3"
      >
        <Form.Control type="e-mail" placeholder=''/>
      </FloatingLabel>

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

      <Button variant="dark" className='mt-3'>Cadastrar</Button>
    </div>
  );
};

export default Cadastro;
