import React from 'react'

import { Card, Container, Form, FloatingLabel, Row, Col, Button } from 'react-bootstrap'

const Cadastro = () => {
  return (
    <div>
        <Container className='my-3'>
            <Card className='p-2'>
                <Card.Header>
                    <Card.Title>
                        Cadastre-se
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <Form>

                        <Row>
                            <Col>
                                <Card className='mb-3'>
                                    <Card.Header>
                                        <Card.Subtitle>
                                            Dados Pessoais
                                        </Card.Subtitle>
                                    </Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <Col sm={12} md={3}>
                                                <FloatingLabel
                                                    controlId='userNameInput'
                                                    label="Nome"
                                                    className='mb-3'
                                                >
                                                    <Form.Control
                                                        type='text'
                                                        placeholder=''
                                                    />
                                                </FloatingLabel>
                                            </Col>
                                            <Col sm={12} md={5}>
                                                <FloatingLabel
                                                    controlId='userSurnameInput'
                                                    label="Sobrenome"
                                                    className='mb-3'
                                                >
                                                    <Form.Control
                                                        type='text'
                                                        placeholder=''
                                                    />
                                                </FloatingLabel>
                                            </Col>
                                            <Col>
                                                <FloatingLabel
                                                    controlId='userCpfInput'
                                                    label="CPF"
                                                    className='mb-3'
                                                >
                                                    <Form.Control
                                                        type='text'
                                                        placeholder=''
                                                    />
                                                </FloatingLabel>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                            
                        <Row> 
                            <Col sm={12} md={6}>
                                <Card className='mb-3'>
                                    <Card.Header>
                                        <Card.Subtitle>
                                            Contato
                                        </Card.Subtitle>
                                    </Card.Header>
                                    <Card.Body>
                                        <FloatingLabel
                                            controlId='userNumPhoneInput'
                                            label="Celular"
                                            className='mb-3'
                                        >
                                            <Form.Control
                                                type='text'
                                                placeholder=''
                                            />
                                        </FloatingLabel>
                                        <FloatingLabel
                                            controlId='userEmailInput'
                                            label="E-mail"
                                            className='mb-3'
                                        >
                                            <Form.Control
                                                type='text'
                                                placeholder=''
                                            />
                                        </FloatingLabel>
                                    </Card.Body>
                                </Card>
                                <Card className='mb-3'>
                                    <Card.Header>
                                        <Card.Subtitle>
                                            Dados de Acesso
                                        </Card.Subtitle>
                                    </Card.Header>
                                    <Card.Body>
                                        <FloatingLabel
                                            controlId='userSenhaInput'
                                            label="Senha"
                                            className='mb-3'
                                        >
                                            <Form.Control
                                                type='text'
                                                placeholder=''
                                            />
                                        </FloatingLabel>
                                        <FloatingLabel
                                            controlId='userConfirmarInput'
                                            label="Confirmar senha"
                                            className='mb-3'
                                        >
                                            <Form.Control
                                                type='text'
                                                placeholder=''
                                            />
                                        </FloatingLabel>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='mb-3'>
                                    <Card.Header>
                                        <Card.Subtitle>
                                            Endereço
                                        </Card.Subtitle>
                                    </Card.Header>
                                    <Card.Body>
                                        <FloatingLabel
                                            controlId='userCEPInput'
                                            label="CEP"
                                            className='mb-3'
                                        >
                                            <Form.Control
                                                type='text'
                                                placeholder=''
                                            />
                                        </FloatingLabel>
                                        <FloatingLabel
                                            controlId='userUfInput'
                                            label="Estado"
                                            className='mb-3'
                                        >
                                            <Form.Control
                                                type='text'
                                                placeholder=''
                                            />
                                        </FloatingLabel>
                                        <FloatingLabel
                                            controlId='userLogradouroInput'
                                            label="Logradouro"
                                            className='mb-3'
                                        >
                                            <Form.Control
                                                type='text'
                                                placeholder=''
                                            />
                                        </FloatingLabel>
                                        <FloatingLabel
                                            controlId='userBairroInput'
                                            label="Bairro"
                                            className='mb-3'
                                        >
                                            <Form.Control
                                                type='text'
                                                placeholder=''
                                            />
                                        </FloatingLabel>
                                        <FloatingLabel
                                            controlId='userCidadeInput'
                                            label="Cidade"
                                            className='mb-3'
                                        >
                                            <Form.Control
                                                type='text'
                                                placeholder=''
                                            />
                                        </FloatingLabel>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                                       
                        <Row>
                            <Col md={6} className='m-auto'>
                                <Button
                                    as='input'
                                    value="Cadastrar"
                                    type='submit'
                                    className='w-100 p-3'
                                    size='lg'
                                />
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    </div>
  )
}

export default Cadastro