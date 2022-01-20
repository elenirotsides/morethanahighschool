import Head from 'next/head';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import PopUp from '../components/PopUp';
import { useState } from 'react';

const Spanish = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <Container>
            <Head>
                <title>Recursos en Español</title>
            </Head>
            <Row>
                <Col xs={12} className='embed-responsive embed-responsive-16by9'>
                    <iframe
                        className='embed-responsive-item'
                        height='500'
                        style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '75%', paddingTop: '20px' }}
                        src='https://www.youtube.com/embed/bZApNOVazdQ'
                        title='YouTube video player'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                    ></iframe>
                </Col>
            </Row>
            <Row style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                <Col>
                    <div
                        style={{
                            border: ' 5px white solid',
                            backgroundColor: 'white',
                            padding: '20px',
                        }}
                    >
                        <p style={{ fontSize: '20px' }}>
                            Los votantes registrados que no solicitaron una boleta de voto por correo podrán votar en persona el 25 de enero de 6 a.
                            m. a 8 p. m. en su centro de votación.{' '}
                            <span style={{ color: 'red', fontWeight: 'bold' }}>
                                Si desconoce la ubicación de tu centro de votación, lo puede encontrar aquí
                            </span>{' '}
                            <span
                                onClick={() => window.open('https://voter.svrs.nj.gov/polling-place-search', '_blank')}
                                style={{ cursor: 'pointer', color: 'blue' }}
                            >
                                https://voter.svrs.nj.gov/polling-place-search
                            </span>{' '}
                            ¡No espere y haga un plan para votar ahora!
                        </p>
                        <p style={{ fontSize: '25px', fontWeight: 'bold', textAlign: 'center' }}>
                            ¡Su voto importa! Este plan es #MásqueUnaEscuela. Por favor vote SÍ: School Strong = ¡Hoboken Strong!
                        </p>
                    </div>
                </Col>
            </Row>
            <Row style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                <Col>
                    <div
                        style={{
                            border: ' 5px #c40303 solid',
                            backgroundColor: '#c40303',
                            padding: '20px',
                            textAlign: 'center',
                        }}
                    >
                        <p style={{ fontSize: '25px', color: 'white', fontWeight: 'bold' }}>
                            El impacto en el aumento de impuestos para los residentes
                        </p>
                        <div style={{ textAlign: 'center' }}>
                            <Button
                                variant='light'
                                onClick={() =>
                                    window.open(
                                        'https://docs.google.com/document/d/1Yr_dxa3n8oI-1FT72-WftfVaXfXy0h_b2Lu2QcLr55U/edit?usp=sharing',
                                        '_blank'
                                    )
                                }
                                style={{ fontFamily: 'ScopeOne-Regular' }}
                            >
                                Haga clic para Leer
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <p style={{ fontSize: '20px', textAlign: 'center', border: '2px white solid', backgroundColor: 'white', width: '50%' }}>
                    (Haga clic en la imagen para ampliarla)
                </p>
                <a onClick={setModalShow} style={{ cursor: 'pointer' }}>
                    <img
                        // className='img-responsive'
                        src='/img/spanish.png'
                        alt='Hoja de Puntos Claves'
                        style={{
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            width: '40%',
                        }}
                    />
                </a>
                <PopUp img={true} show={modalShow} onHide={() => setModalShow(false)}></PopUp>
            </Row>
        </Container>
    );
};

export default Spanish;
