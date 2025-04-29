import React from 'react'
import { Container , Card, Row, Col, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';

import styles from  "./home.module.css";

const Home = () => {
    const valorParcela_curso = "499,99";
    const valorTotal_curso = "2.293,99"
  return (
    <Container>
        <Card className={styles.card}>
            <div className={styles.cursonameConteiner}>
                <h3 className={styles.cursoname}>TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS</h3>
                <div className={styles.img}>
                    <img/>
                </div>
            </div>
            <div className={styles.infoscurso}>
                <div>
                    <div className={styles.linhainfo}>
                        <img src="./public/icons/localicon.png" alt="" />
                        <p>
                            Vitória
                        </p>
                    </div>
                    <div className={styles.linhainfo}>
                        <img src="./public/icons/modo_aula.png" alt="" />
                        <p>
                            Presencial
                        </p>
                    </div>
                </div>
                <div>
                    <div className={styles.linhainfo}>
                        <img src="./public/icons/duracao_icon.png" alt="" />
                        <p>
                            1200 horas
                        </p>
                    </div>
                    <div className={styles.linhainfo}>
                        <img src="./public/icons/calendicon.png" alt="" />
                        <p>
                            01/07/2025
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.valores}>
                    <div className={styles.parcela}>
                        <p>
                            até 6x de R$ {valorParcela_curso}
                        </p>
                    </div>
                    <div className={styles.total}>
                        <p>
                            Total: R$ {valorTotal_curso}
                        </p>
                    </div>
                </div>
            <Button
                as='input'
                value="MATRICULE-SE"
                type='button'
                size='lg'
                className={styles.button}
            />
        </Card>
    </Container>
  )
}

export default Home