import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import { Link } from 'react-router-dom'

import styles from "./CursoCard.module.css";

import { useParams } from 'react-router-dom'

// importar hook para localizar as infos do curso pelo id

const CardCursoDetalhado = (props) => {

    const {id} = useParams();

  return (
    <div>
        <Container className={styles.container}>
            <Card className={styles.cardcontainer} style={{marginTop:"1rem"}}>
                <Card.Header className={styles.cardheader}>
                    <Card.Title className={styles.name}>
                        {props.nome}
                    </Card.Title>
                    <Row
                        className={styles.cursoimg}
                        style={
                            {
                                background:`no-repeat center/100% url(${props.urlImg})`,
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
                                    {props.localidade}
                                </div>
                                <div className={styles.duracao}>
                                    {props.duracao}
                                </div>
                                <div className={styles.turno}>
                                    {props.turno}
                                </div>
                                <div className={styles.modalidade}>
                                    {props.modalidade}
                                </div>
                                <div className={styles.data}>
                                    {props.data}
                                </div>
                                <div className={styles.valortotalcontainer}>
                                    <div style={{color:"#F2AB13"}}>
                                        R$ {props.valorTotal}
                                    </div>
                                </div>
                        </Col>
                                    
                        <Row>
                            <Col className={styles.parcela}>
                                até {props.qtdParcela}x de R$ {props.valorParcela}
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