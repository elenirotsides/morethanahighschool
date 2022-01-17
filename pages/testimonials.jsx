import { Container, Row, Card, CardGroup, Col, Spinner } from 'react-bootstrap';
import { useState } from 'react';

const Testimonials = () => {
    const [loading, setLoading] = useState(true);

    const hideSpinner = () => {
        setLoading(false);
    };

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
        {
            name: 'Antonio, District Parent',
            link: 'https://www.youtube.com/embed/fYLrXA4P1Gc',
        },
        {
            name: 'Heather, Charter School Parent',
            link: 'https://www.youtube.com/embed/cQ8ggcW6W4E',
        },
        {
            name: 'Jackie, District Parent',
            link: 'https://www.youtube.com/embed/9GzHDV6-AS0',
        },
        {
            name: 'Alex, HHS Alumnus and District Parent',
            link: 'https://www.youtube.com/embed/D7U_Fml_p5M',
        },
        {
            name: 'James, District Parent',
            link: 'https://www.youtube.com/embed/Cbtm_ExvRuY',
        },
        {
            name: 'Jenny, District Parent',
            link: 'https://www.youtube.com/embed/5SSBCbZwwa8',
        },
        {
            name: 'Kim, District Parent',
            link: 'https://www.youtube.com/embed/-Fz5R1B1tRc',
        },
        {
            name: 'Michele, District Parent',
            link: 'https://www.youtube.com/embed/FayOBdRvoE4',
        },
        {
            name: 'Shruthi, District Parent',
            link: 'https://www.youtube.com/embed/4CeXI7hPPxI',
        },
        {
            name: 'Susana, District Parent',
            link: 'https://www.youtube.com/embed/wpgkKraeZ-A',
        },
        {
            name: 'Tatyana, District Parent',
            link: 'https://www.youtube.com/embed/RBx88Gvn2-c',
        },
    ];

    const renderCard = (card, index) => {
        return (
            <Col className='col-12 col-lg-6' key={index}>
                <div className='m-3'>
                    <Card
                        // className='box'
                        style={{
                            textAlign: 'center',
                            width: '100%',
                            fontFamily: 'ScopeOne-Regular',
                            fontSize: '20px',
                            backgroundColor: index % 2 === 0 ? '#a7a6a6' : '#cba7a7',
                        }}
                    >
                        <Card.Body>
                            <Card.Header>{card.name}</Card.Header>
                            {loading ? (
                                <Spinner animation='border' variant='danger' style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
                            ) : null}
                            <iframe
                                // width='1424'
                                // height='557'
                                height='400'
                                style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '100%' }}
                                src={card.link}
                                title='YouTube video player'
                                frameBorder='0'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                allowFullScreen
                                onLoad={hideSpinner}
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
