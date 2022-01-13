import { Container, Row, CardGroup, Card, Button, Col } from 'react-bootstrap';
import '../App.css';
import Facilities from '../img/Facilities.png';
import Dangers from '../img/Dangers.png';
import Lowdown from '../img/Lowdown.png';

const Home = () => {
    return (
        <Container>
            <Row>
                <h1 style={{ textAlign: 'center', paddingTop: '20px', paddingBottom: '20px' }}>—Together, we can build Hoboken's future—</h1>
            </Row>
            <Row>
                <Col xs={12} xl={6} className='p-2'>
                    <iframe
                        // width='1424'
                        // height='557'
                        height='400'
                        style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '100%' }}
                        src='https://www.youtube.com/embed/R_tavVjZfZ0'
                        title='YouTube video player'
                        frameborder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowfullscreen
                    ></iframe>
                </Col>
                <Col xs={12} xl={6} className='p-2'>
                    <iframe
                        src='https://online.flippingbook.com/view/781450059/'
                        title='FlipBook'
                        height='400'
                        frameborder='0'
                        scrolling='no'
                        style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '100%' }}
                        allowFullScreen
                    ></iframe>
                </Col>
            </Row>
            <Row style={{ paddingTop: '20px' }}>
                <CardGroup>
                    <Card className='m-3' style={{ textAlign: 'center' }}>
                        <Card.Img variant='top' src={Facilities} />
                        <Card.Body>
                            <Card.Title>Facilities: Why the Proposed Plan Is Necessary Now</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            <Button
                                variant='danger'
                                onClick={() =>
                                    window.open(
                                        'https://docs.google.com/document/d/1vumTHAgDrjjAXTqi7obbFMIAiSHKqfmlmk-Fn5x_1E8/edit?usp=sharing',
                                        '_blank'
                                    )
                                }
                            >
                                Click to Read
                            </Button>
                        </Card.Footer>
                    </Card>
                    <Card className='m-3' style={{ textAlign: 'center' }}>
                        <Card.Img variant='top' src={Dangers} />
                        <Card.Body>
                            <Card.Title>The Dangers of “No for Now”: What a “no” vote really means</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            <Button
                                variant='danger'
                                onClick={() =>
                                    window.open(
                                        'https://docs.google.com/document/d/18LIZKapeUQVCTrFDjXtO-QLUNgT4enBma9vJKrY-9MM/edit?usp=sharing',
                                        '_blank'
                                    )
                                }
                            >
                                Click to Read
                            </Button>
                        </Card.Footer>
                    </Card>
                    <Card className='m-3' style={{ textAlign: 'center' }}>
                        <Card.Img variant='top' src={Lowdown} />
                        <Card.Body>
                            <Card.Title>Calculate Your Tax Increase</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            <Button
                                variant='danger'
                                onClick={() =>
                                    window.open(
                                        'https://docs.google.com/document/d/1_57FxjiLKfAa2cazpSaui3IjNECCVJXaM3EI91XtW_k/edit?usp=sharing',
                                        '_blank'
                                    )
                                }
                            >
                                Click to Read
                            </Button>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </Row>
        </Container>
    );
};

export default Home;
