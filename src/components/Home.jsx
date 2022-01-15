import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';

const Home = () => {
    return (
        <Container>
            <Row style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                <Col
                    xs={12}
                    style={{
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        height: '50%',
                        textAlign: 'center',
                    }}
                >
                    <div style={{ border: ' 5px #c40303 solid', backgroundColor: '#c40303' }}>
                        {' '}
                        <h1 style={{ color: 'white', fontSize: '30px' }}>Together we can build Hoboken's future</h1>
                    </div>
                </Col>
            </Row>
            <Row style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                <Col>
                    <div style={{ border: ' 5px white solid', borderRadius: '2rem', backgroundColor: 'white' }}>
                        <h1 style={{ fontSize: '30px', textAlign: 'center' }}>We must act now to:</h1>
                        <p className='checkmark'>Address Critical Facility Gaps</p>
                        <p className='checkmark'>Accomodate Growing Enrollment</p>
                        <p className='checkmark'>Provide Facilities Needed to Fully Implement the District's 21st Century Academic Curriculum</p>
                    </div>
                </Col>
            </Row>
            <Row style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                <Col>
                    <h2 style={{ fontSize: '25px', textAlign: 'center', paddingBottom: '10px' }}>
                        We support the Hoboken School District's plan to build <br />
                        world-class educational and community facilities
                    </h2>
                    <div
                        style={{
                            border: ' 5px #c40303 solid',
                            backgroundColor: '#c40303',
                            textAlign: 'center',
                            marginTop: '20px',
                            marginBottom: '20px',
                        }}
                    >
                        {' '}
                        <h1 style={{ color: 'white', fontSize: '30px' }}>This plan is #MoreThanAHighSchool</h1>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} xl={6} className='p-2'>
                    <iframe
                        height='400'
                        style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '100%' }}
                        src='https://www.youtube.com/embed/R_tavVjZfZ0'
                        title='YouTube video player'
                        frameborder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowfullscreen='true'
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
            <Row style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                <Col>
                    <h1 className='moreInfo'>Additional Information</h1>
                    <div style={{ textAlign: 'center', fontSize: '20px' }}>
                        <span
                            onClick={() =>
                                window.open(
                                    'https://docs.google.com/document/d/11MW9ZIi6q5nUkcYby7bFZ7g5YvcuMtuLm7hSvBBO7Do/edit?usp=sharing',
                                    '_blank'
                                )
                            }
                            style={{ cursor: 'pointer', color: 'blue' }}
                        >
                            Referendum FAQ
                        </span>
                        <p>
                            For more information on the plan please visit{' '}
                            <span onClick={() => window.open('http://www.hoboken.k12.nj.us/', '_blank')} style={{ cursor: 'pointer', color: 'blue' }}>
                                www.hoboken.k12.nj.us
                            </span>
                            .
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
