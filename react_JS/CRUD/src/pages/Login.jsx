import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { BsBoxArrowInRight } from "react-icons/bs";

import { useForm } from "react-hook-form"

const Login = () => {
  return (
    <div>
      <Container style={{height:"100vh"}} 
        className="justify-content-center aling-content-center"
      >
        <BsBoxArrowInRight
          style={{
            fontSize: "300px",
            color: "green",
            margin: "auto",
            width: "100%"
          }}
        />
        <Form style={{width: "75%", margin: "auto", textAlign:"center"}}>
          <FloatingLabel controlId="floatingInputEmail" label="Email" className="mb-5">
            <Form.Control 
              type="email"
              placeholder=""
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInputPass" label="Senha" className="mb-5">
            <Form.Control 
              type="password"
              placeholder=""
            />
          </FloatingLabel>
          <Button variant="primary" type="submit" className="mb-5" size="lg">
            Login
          </Button>
          <Alert variant="danger" className="mb-5" 
            style={
              {
                position:"absolute",
                width:"30%",
                left:"35%", 
                top:"90%"
              }
          }>
            Siiim!
          </Alert>
        </Form>
      </Container>
    </div>
  )
}

export default Login