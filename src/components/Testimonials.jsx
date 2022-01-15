import '../App.css';
import { Container, Row, Card, CardGroup, Col } from 'react-bootstrap';

const Testimonials = () => {
    const cardData = [
        {
            name: 'Lucas, HMS Student',
            link: 'https://www.youtube.com/embed/vgTaJDBwmPQ',
        },
        {
            name: 'HHS Teacher & District Parent',
            link: 'https://www.youtube.com/embed/4Pfkzkzga1w',
        },
        {
            name: 'Wallace Teacher, President of the Hoboken Education Association and lifelong Hoboken resident',
            link: 'https://www.youtube.com/embed/i90DU-PwVA0',
        },
        {
            name: 'HHS Principal, 26-year Hoboken Resident and Homeowner/Taxpayer',
            link: 'https://www.youtube.com/embed/q8z1NO_5MaU',
        },
    ];

    const renderCard = (card, index) => {
        return (
            <Col className='col-12 col-md-6'>
                <div className='m-3'>
                    <Card
                        style={{
                            textAlign: 'center',
                            width: '100%',
                            fontFamily: 'Georgia, Times New Roman, Times, serif',
                            fontSize: '20px',
                            backgroundColor: index % 2 === 0 ? '#a7a6a6' : '#cba7a7',
                            borderRadius: '1rem',
                            className: 'box',
                        }}
                    >
                        <Card.Body>
                            <Card.Header>{card.name}</Card.Header>
                            <iframe
                                // width='1424'
                                // height='557'
                                height='400'
                                style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '100%' }}
                                src={card.link}
                                title='YouTube video player'
                                frameborder='0'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                allowFullScreen='true'
                                key={index}
                            ></iframe>
                        </Card.Body>
                    </Card>
                </div>
            </Col>
        );
    };

    return (
        <Container>
            <Row style={{ paddingTop: '20px' }}>
                <CardGroup className='grid justify-content-md-center'>{cardData.map(renderCard)}</CardGroup>
            </Row>{' '}
        </Container>
    );
};

export default Testimonials;
