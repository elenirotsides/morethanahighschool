import Head from 'next/head';
import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import GoogleFormModal from '../components/GoogleFormModal';

export default function Home() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div>
            <Head>
                <title>Vote YES</title>
                <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
                <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
                <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
                <link rel='manifest' href='/site.webmanifest' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <meta name='theme-color' content='#000000' />
                <meta name='description' content='Vote YES on January 25' />
                <meta name='image' property='og:image' content='https://www.morethanahighschool.org/img/img3.png' />
                <link
                    rel='stylesheet'
                    href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
                    integrity='sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3'
                    crossOrigin='anonymous'
                />
            </Head>

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
                        <div style={{ textAlign: 'center', paddingBottom: '20px' }}>
                            <Button
                                variant='light'
                                size='lg'
                                onClick={() => setModalShow(true)}
                                style={{ fontFamily: 'ScopeOne-Regular', color: '#c40303', fontWeight: 'bold' }}
                            >
                                📣 Click to Receive a Reminder on Jan 25 to Vote 📣
                            </Button>
                        </div>

                        <div style={{ border: ' 5px #c40303 solid', backgroundColor: '#c40303' }}>
                            {' '}
                            <h1 style={{ color: 'white', fontSize: '30px' }}>Together we can build Hoboken's future</h1>
                        </div>

                        <GoogleFormModal show={modalShow} onHide={() => setModalShow(false)} />
                    </Col>
                </Row>
                <Row style={{ paddingBottom: '20px' }}>
                    <Col>
                        <div style={{ border: ' 5px white solid', backgroundColor: 'white' }}>
                            <h1 style={{ fontSize: '30px', textAlign: 'center' }}>We must act now to:</h1>
                            <p className='checkmark'>Address Critical Facility Gaps</p>
                            <p className='checkmark'>Accommodate Growing Enrollment</p>
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
                            src='https://www.youtube.com/embed/JdnKeuRxrYc'
                            title='YouTube video player'
                            frameBorder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                        ></iframe>
                    </Col>
                    <Col xs={12} xl={6} className='p-2'>
                        <iframe
                            src='https://online.flippingbook.com/view/781450059/'
                            title='FlipBook'
                            height='400'
                            frameBorder='0'
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
                                style={{ cursor: 'pointer', color: 'blue', fontFamily: 'ScopeOne-Regular' }}
                            >
                                Referendum FAQ
                            </span>
                            <p>
                                For more information on the plan please visit{' '}
                                <span
                                    onClick={() => window.open('http://www.hoboken.k12.nj.us/', '_blank')}
                                    style={{ cursor: 'pointer', color: 'blue', fontFamily: 'ScopeOne-Regular' }}
                                >
                                    www.hoboken.k12.nj.us
                                </span>
                                .
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
