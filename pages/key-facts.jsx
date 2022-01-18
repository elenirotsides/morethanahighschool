import { Container, Row, Card, CardGroup, Button, Col } from 'react-bootstrap';
import Head from 'next/head';

const KeyFacts = () => {
    const cardData = [
        {
            img: '/img/Lowdown.png',
            title: 'Calculate Your Tax Increase',
            link: 'https://docs.google.com/document/d/1_57FxjiLKfAa2cazpSaui3IjNECCVJXaM3EI91XtW_k/edit?usp=sharing',
        },
        {
            img: '/img/Facilities.png',
            title: 'Facilities: Why the Proposed Plan Is Necessary Now',
            link: 'https://docs.google.com/document/d/1vumTHAgDrjjAXTqi7obbFMIAiSHKqfmlmk-Fn5x_1E8/edit?usp=sharing',
        },
        {
            img: '/img/Academics.png',
            title: 'Academics: School Strong = Hoboken Strong',
            link: 'https://docs.google.com/document/d/14CpmralkxxsLSokm5-kqDyxIDMWjHZB_DIEGDBQfAEE/edit?usp=sharing',
        },
        {
            img: '/img/Dangers.png',
            title: 'The Dangers of “No for Now”: What a “no” vote really means',
            link: 'https://docs.google.com/document/d/18LIZKapeUQVCTrFDjXtO-QLUNgT4enBma9vJKrY-9MM/edit?usp=sharing',
        },
    ];

    const renderCard = (card, index) => {
        return (
            <Col className='col-12 col-md-6 col-lg-4' key={index}>
                <Card className='m-3 box' style={{ textAlign: 'center', height: '95%' }}>
                    <Card.Img variant='top' src={card.img} alt={`Graphic that shows ${card.title}`} />
                    <Card.Body>
                        <Card.Title style={{ fontFamily: 'ScopeOne-Regular' }}>{card.title}</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant='danger' onClick={() => window.open(`${card.link}`, '_blank')} style={{ fontFamily: 'ScopeOne-Regular' }}>
                            Click to Read
                        </Button>
                    </Card.Footer>
                </Card>
            </Col>
        );
    };

    return (
        <Container>
            <Head>
                <title>Key Facts</title>
            </Head>
            <Row style={{ paddingTop: '20px' }}>
                <CardGroup className='grid justify-content-md-center'>{cardData.map(renderCard)}</CardGroup>
            </Row>{' '}
        </Container>
    );
};

export default KeyFacts;
