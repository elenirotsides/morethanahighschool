import { Container, Row, Col, Card, CardGroup, Button } from 'react-bootstrap';

const OpEds = () => {
    const cardData = [
        {
            name: 'Erica Gavin',
            title: 'The Superintendent of Hoboken Public Schools Deserves Your Respect',
            link: 'https://hudsonreporter.com/2021/12/17/the-superintendent-of-hoboken-public-schools-deserves-your-respect/',
        },
        {
            name: 'Shweta Gursahani',
            title: 'Hoboken Students Deserve the Best, January 25 Referendum Offers that to Them',
            link: 'https://www.tapinto.net/towns/hobnoken/sections/education/articles/opinion-hoboken-students-deserve-the-best-january-25-referendum-offers-that-to-them',
        },
        {
            name: 'Jenny Labendz',
            title: "Hoboken's New High School is Absolutely Worth the Money",
            link: 'https://www.tapinto.net/towns/hoboken/articles/reader-opinion-hoboken-s-new-high-school-is-absolutely-worth-the-money',
        },
        {
            name: 'Hoboken Girl collection',
            title: 'Hoboken Residents Weigh in on the Hoboken High School Proposal, Plus Info on the 1/25 Vote',
            link: 'https://www.hobokengirl.com/hoboken-residents-weigh-in-on-the-hoboken-high-school-proposal-info-on-the-vote/',
        },
        {
            name: 'Ron Bautista',
            title: "'I believe our kids are worth it' so I'll vote yes on $241M Hoboken school referendum",
            link: 'https://hudsoncountyview.com/op-ed-i-believe-our-kids-are-worth-it-so-ill-vote-yes-on-241m-hoboken-school-referendum/',
            video: 'https://www.facebook.com/RonBautistaNJ/videos/1367533730316439/?extid=NS-UNK-UNK-UNK-IOS_GK0T-GK1C',
        },
        {
            name: 'Frederick Cooke',
            title: "'Listen to the Experts' on New School Vote",
            link: 'https://www.tapinto.net/towns/hoboken/articles/reader-opinion-listen-to-the-experts-on-new-school-vote',
        },
        {
            name: 'Jessica Rodriguez',
            title: 'The new Hoboken High School will support equitable education for ALL students',
            link: 'https://hudsoncountyview.com/letter-the-new-hoboken-high-school-will-support-equitable-education-for-all-students/',
        },
    ];

    const renderCard = (card, index) => {
        return (
            <Col className='col-12 col-md-6 col-lg-4' key={index}>
                <Card
                    style={{
                        fontFamily: 'ScopeOne-Regular',
                        textAlign: 'center',
                        backgroundColor: index % 2 === 0 ? '#a7a6a6' : '#cba7a7',
                        height: '90%',
                    }}
                    className='box m-3'
                >
                    <Card.Header>Author: {card.name}</Card.Header>
                    <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant='danger' onClick={() => window.open(`${card.link}`, '_blank')} style={{ fontFamily: 'ScopeOne-Regular' }}>
                            Click to Read
                        </Button>
                        {card.video ? (
                            <Button
                                variant='danger'
                                onClick={() => window.open(`${card.video}`, '_blank')}
                                style={{ margin: '10px', fontFamily: 'ScopeOne-Regular' }}
                            >
                                Click to Watch
                            </Button>
                        ) : null}
                    </Card.Footer>
                </Card>
            </Col>
        );
    };

    return (
        <Container fluid>
            <Row style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                <Col className='col-12 col-md-6'>
                    <Card
                        style={{
                            fontFamily: 'ScopeOne-Regular',
                            textAlign: 'center',
                            backgroundColor: '#a7a6a6',
                            height: '90%',
                        }}
                        className='box m-3'
                    >
                        <Card.Header>Author: Mayor Ravinder Bhalla</Card.Header>
                        <Card.Body>
                            <Card.Title>Supporting our Public Schools January 25</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            <Button
                                variant='danger'
                                onClick={() =>
                                    window.open('https://www.ravinderbhalla.com/news/supporting-our-public-schools-on-january-25/', '_blank')
                                }
                            >
                                Click to Read
                            </Button>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col className='col-12 col-md-6'>
                    <Card
                        style={{
                            fontFamily: 'ScopeOne-Regular',
                            textAlign: 'center',
                            backgroundColor: '#cba7a7',
                            height: '90%',
                        }}
                        className='box m-3'
                    >
                        <Card.Header>Author: Councilperson-At-Large Emily Jabbour</Card.Header>
                        <Card.Body>
                            <Card.Title>My support for the new Hoboken High School and upcoming referendum</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            <Button
                                variant='danger'
                                onClick={() =>
                                    window.open(
                                        'https://medium.com/@hobokenemily/my-support-for-the-new-high-school-and-upcoming-referendum-9ee3c0d6702',
                                        '_blank'
                                    )
                                }
                            >
                                Click to Read
                            </Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <Row style={{ paddingBottom: '20px' }}>
                <CardGroup className='grid justify-content-md-center'>{cardData.map(renderCard)}</CardGroup>
            </Row>{' '}
        </Container>
    );
};

export default OpEds;
