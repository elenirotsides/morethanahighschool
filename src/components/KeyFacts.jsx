import '../App.css';
import { Container, Row, Card, CardGroup, Button } from 'react-bootstrap';
import Facilities from '../img/Facilities.png';
import Dangers from '../img/Dangers.png';
import Lowdown from '../img/Lowdown.png';

const KeyFacts = () => {
    return (
        <Container>
            <Row style={{ paddingTop: '20px' }}>
                <CardGroup>
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
                </CardGroup>
            </Row>{' '}
        </Container>
    );
};

export default KeyFacts;
