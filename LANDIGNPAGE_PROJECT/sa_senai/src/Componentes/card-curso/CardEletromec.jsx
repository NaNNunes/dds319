import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import styles from  "../card-curso/CursoCard.module.css";

import {Link} from 'react-router-dom';

import urlImg from "../../assets/eletromecimg.png";

const CardEletromec = () => {
    const curso = {
        nome : "Técnico em Eletromecânica",
        localidade: "Vitória",
        valorTotal: "2.994,00",
        valorParcela: "499,00",
    }

  return (
    <Container className={styles.container}>
       <Card className={styles.cardcontainer}>
            <Card.Header className={styles.cardheader}>
                <Row className={styles.cursotitle}>
                    <Link
                        to=''
                        className={styles.name}
                    >
                        {curso.nome}
                    </Link>
                </Row>
                <Row 
                    className={styles.cursoimg} 
                    style={{background: `no-repeat center/100% url(${urlImg})`}}
                />
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col xs={2}>
                        <div className={styles.localidade}>
                            {curso.localidade}
                        </div>
                    </Col>
                    <Col className={styles.valores}>
                        <Row className={styles.total}>
                            <div>R$ {curso.valorTotal}</div>
                        </Row>
                        <Row className={styles.parcela}>
                            <div>até 6x de R$ {curso.valorParcela}</div>
                        </Row>
                    </Col>
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
  )
}

export default CardEletromec