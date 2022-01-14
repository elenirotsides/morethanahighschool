import '../App.css';
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
            link: 'https://www.tapinto.net/towns/hoboken/sections/education/articles/opinion-hoboken-students-deserve-the-best-january-25-referendum-offers-that-to-them',
        },
        {
            name: 'Jenny Labendz',
            title: "Hoboken's New High School is Absolutely Worth the Money",
            link: 'https://www.tapinto.net/towns/hoboken/articles/reader-opinion-hoboken-s-new-high-school-is-absolutely-worth-the-money',
        },
        {
            name: 'Emily Jabbour',
            title: 'My support for the new Hoboken High School and upcoming referendum',
            link: 'https://medium.com/@hobokenemily/my-support-for-the-new-high-school-and-upcoming-referendum-9ee3c0d6702',
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
        },
        {
            name: 'Frederick Cooke',
            title: "'Listen to the Experts' on New School Vote",
            link: 'https://www.tapinto.net/towns/hoboken/articles/reader-opinion-listen-to-the-experts-on-new-school-vote',
        },
    ];

    const renderCard = (card, index) => {
        return (
            <Col className='col-12 col-md-6 col-lg-4'>
                <Card
                    style={{
                        fontFamily: 'Georgia, Times New Roman, Times, serif',
                        textAlign: 'center',
                        borderRadius: '1rem',
                        backgroundColor: index % 2 === 0 ? '#a7a6a6' : '#cba7a7',
                        height: '90%',
                    }}
                    key={index}
                    className='box m-3'
                >
                    <Card.Header>Author: {card.name}</Card.Header>
                    <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant='danger' onClick={() => window.open(`${card.link}`, '_blank')}>
                            Click to Read
                        </Button>
                    </Card.Footer>
                </Card>
            </Col>
        );
    };

    return (
        <Container fluid>
            <Row style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                <Col
                    xs={12}
                    style={{
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        paddingTop: '20px',
                        paddingBottom: '20px',
                        height: '50%',
                        textAlign: 'center',
                    }}
                >
                    <div
                        class='fb-video'
                        data-href='https://www.facebook.com/watch/?v=1367533730316439'
                        data-width='300'
                        data-show-text='false'
                        data-allowfullscreen='true'
                    >
                        <blockquote cite='https://www.facebook.com/RonBautistaNJ/videos/1367533730316439/' class='fb-xfbml-parse-ignore'>
                            {/* eslint-disable-next-line */}
                            <a href='https://www.facebook.com/RonBautistaNJ/videos/1367533730316439/'></a>
                            <p>
                                #TheRedwingWay! As a 2004 alum and as a parent, I’m voting YES on January 25th for a new state of the art #Hoboken
                                High School. Here’s why: ✅Updated and dedicated science and engineering spaces, along with dedicated arts &amp;
                                letters spaces, sports facilities and community space in time for the 2025-2026 school year. ✅ The Middle School will
                                then be able to move from Demarest to the old high school building. The current HS will require some retrofitting that
                                can be paid for out of the yearly Board of Ed Budget. The current Middle School does not have a full-sized gym, a full
                                cafeteria or any dedicated arts &amp; music spaces. All of that will be addressed with the move. Plus, the population
                                at the middle school has grown, and there is no more room at Demarest. ✅ Once the Middle School is relocated, the NJ
                                School Development Authority will renovate the Demarest building, paid for fully by the state of NJ.
                            </p>
                            Posted by <a href='https://www.facebook.com/RonBautistaNJ'>Ron Bautista</a> on Wednesday, January 5, 2022
                        </blockquote>
                    </div>
                </Col>
            </Row>
            <Row style={{ paddingBottom: '20px' }}>
                <CardGroup className='grid justify-content-md-center'>{cardData.map(renderCard)}</CardGroup>
            </Row>{' '}
        </Container>
    );
};

export default OpEds;
