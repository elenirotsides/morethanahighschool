import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';

const Home = () => {
    return (
        <Container>
            <Row>
                <Col
                    xs={12}
                    style={{
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        paddingTop: '20px',
                        paddingBottom: '20px',
                        height: '50%',
                        // width: '50%',
                        textAlign: 'center',
                    }}
                >
                    <div style={{ border: ' 5px #c40303 solid', borderRadius: '2rem', backgroundColor: '#c40303' }}>
                        {' '}
                        <h1 style={{ color: 'white', fontSize: '30px' }}>Together we can build Hoboken's future</h1>
                    </div>
                </Col>
            </Row>
            <Row style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                <div style={{ border: ' 5px #a7a6a6 solid', borderRadius: '2rem', backgroundColor: '#a7a6a6' }}>
                    <h1 style={{ fontSize: '30px', textAlign: 'center' }}>We must act now to:</h1>
                    <ul className='checkmarkListGroup'>
                        <li className='checkmark'>Address Critical Facility Gaps</li>
                        <li className='checkmark'>Accomodate Growing Enrollment</li>
                        <li className='checkmark'>Provide Facilities Needed to Fully Implement the District's 21st Century Academic Curriculum</li>
                    </ul>
                </div>
            </Row>
            <Row style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                <div style={{ border: ' 5px #c40303 solid', borderRadius: '2rem', backgroundColor: '#c40303', textAlign: 'center' }}>
                    {' '}
                    <h1 style={{ color: 'white', fontSize: '30px' }}>This plan is #MoreThanAHighSchool</h1>
                </div>
                <h2 style={{ paddingTop: '20px', paddingBottom: '20px', fontSize: '25px', textAlign: 'center' }}>
                    We support the Hoboken School District's plan to build world-class educational and community facilities
                </h2>
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
                <h1 className='moreInfo'>Additional Information</h1>
                <div style={{ textAlign: 'center', fontSize: '20px' }}>
                    <span
                        onClick={() =>
                            window.open('https://docs.google.com/document/d/11MW9ZIi6q5nUkcYby7bFZ7g5YvcuMtuLm7hSvBBO7Do/edit?usp=sharing', '_blank')
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
            </Row>
        </Container>
    );
};

export default Home;
