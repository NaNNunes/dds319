import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import { Link } from 'react-router-dom'

import urlImg from "../../assets/ddsimg.png";

import styles from "./CursoCard.module.css";

const CardCursoDetalhado = () => {
  return (
    <div>
        <Container className={styles.container}>
            <Card className={styles.cardcontainer} style={{marginTop:"1rem"}}>
                <Card.Header className={styles.cardheader}>
                    <Card.Title className={styles.name}>
                        Titulo
                    </Card.Title>
                    <Row
                        className={styles.cursoimg}
                        style={
                            {
                                background:`no-repeat center/100% url(${urlImg})`,
                                filter:"brightness(50%)"
                            }
                        }
                    />
                </Card.Header>

                <Card.Body className='text-center'>
                   
                    <Row>
                        
                        <Col xl={8} lg={10} md={7} sm={10} xs={10} 
                         className='m-auto mb-2 d-flex flex-wrap justify-content-around'>
                            
                                <div className={styles.localidade}>
                                    localidade
                                </div>
                                <div className={styles.duracao}>
                                    duracao
                                </div>
                                <div className={styles.duracao}>
                                    Turno
                                </div>
                                <div className={styles.modalidade}>
                                    Modalidade
                                </div>
                                <div className={styles.data}>Data</div>
                                <div className={styles.valortotalcontainer}>
                                    <div style={{color:"#F2AB13"}}>R$ 2.994,00</div>
                                </div>
                        </Col>
                                    
                        <Row>
                            <Col className={styles.parcela}>
                                até 6x de R$ 499,00
                            </Col>
                        </Row>
                    </Row>

                    <Row>
                        <Col>
                            <Button
                                as='input'
                                value={"Matricule-se"}
                                type='submit'
                                size='lg'
                                className={styles.btn}
                            />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    </div>
  )
}

export default CardCursoDetalhado