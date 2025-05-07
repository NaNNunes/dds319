import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { BsBoxArrowInRight } from "react-icons/bs";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import {useState} from "react";
import { useVerificaLogin } from "../hooks/useApi";

const Login = () => {
  const {register, handleSubmit, formState: {errors}} = useForm();
  
  const {verificaLogin} = useVerificaLogin();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("dados:",data);

    const respVerificacao = verificaLogin(data);

    if (respVerificacao === "Login efetuado com sucesso"){
      alert(respVerificacao);
      navigate("/home");
    }else{
      setAlertClass('mb-5 mt-2')
      setAlertMsg(respVerificacao);
    }
  }

  const onError = (errors) => {
    console.log("error: ",errors)
  }

  const [alertClass, setAlertClass] = useState("mb-5 d-none");
  const [alertMsg, setAlertMsg] = useState("");

  return (
    <div>
      <Container style={{height:"92vh"}} 
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
        <Form 
          style={{width: "75%", margin: "auto", textAlign:"center"}}
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <FloatingLabel controlId="floatingInputEmail" label="Email" className="mb-5">
            <Form.Control 
              type="email"
              placeholder=""
              {  
                // passa chave e valor --> "chave", {valor}
                ...register("email",{
                  required: "Email é obrigatório",
                  pattern: {
                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                    message: "Email inválido"
                  },
                  validate: (value) => value.includes("@") || 'Email inválido'
                })
              }
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </FloatingLabel>
          <FloatingLabel controlId="floatingInputPass" label="Senha" className="mb-5">
            <Form.Control 
              type="password"
              placeholder=""
              {
                ...register("senha",
                  {
                    required: "A senha é obrigatória"
                  }
                )
              }
            />
            {errors.senha && <p className="error">{errors.senha.message}</p>}
          </FloatingLabel>
          <Button variant="primary" type="submit" className="mb-5" size="lg">
            Login
          </Button>
          <Alert variant="danger" className={alertClass}
            style={
              {
                position:"absolute",
                width:"30%",
                left:"35%", 
                top:"90%"
              }
          }>
            {alertMsg}
          </Alert>
        </Form>
      </Container>
    </div>
  )
}

export default Login