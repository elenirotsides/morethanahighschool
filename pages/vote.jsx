import { Row, Col, Container } from 'react-bootstrap';
import Head from 'next/head';
import { useState } from 'react';
import PopUp from '../components/PopUp';

const Vote = () => {
    const [modalShow, setModalShow] = useState({ show: false, link: '' });

    return (
        <Container>
            <Head>
                <title>Vote</title>
            </Head>
            <Row style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                <Col>
                    <div
                        style={{
                            border: ' 5px white solid',
                            backgroundColor: 'white',
                            padding: '20px',
                        }}
                    >
                        <p style={{ fontSize: '20px' }}>
                            On January 25th, registered Hoboken residents will have the opportunity to vote on the proposed{' '}
                            <span
                                onClick={() => window.open('https://www.youtube.com/watch?v=JdnKeuRxrYc', '_blank')}
                                style={{ cursor: 'pointer', color: 'blue' }}
                            >
                                Hoboken Schools Long Range Facilities Plan
                            </span>{' '}
                            (which includes the construction of a new high school) through a special referendum.
                            <br />
                            <br />
                            <span style={{ color: '#c40303', fontWeight: 'bold' }}>
                                In-person voting will take place on January 25th from 6am-8pm. Find your polling site location{' '}
                                <span
                                    onClick={() => window.open('https://voter.svrs.nj.gov/polling-place-search', '_blank')}
                                    style={{ cursor: 'pointer', color: 'blue' }}
                                >
                                    here
                                </span>{' '}
                                and make a plan <span style={{ textDecoration: 'underline' }}>now</span> to vote! If you'd like to receive a reminder
                                on Voting Day, submit your email or cell number{' '}
                                <span
                                    onClick={() =>
                                        setModalShow({
                                            show: true,
                                            link: 'https://docs.google.com/forms/d/e/1FAIpQLSfngPhZototEeNoXZCSXTBRR3peAYgG3GFDgxu4gpWv9s9KKw/viewform?embedded=true',
                                        })
                                    }
                                    style={{ cursor: 'pointer', color: 'blue' }}
                                >
                                    here
                                </span>
                                .
                                <PopUp
                                    img={false}
                                    link={modalShow.link}
                                    show={modalShow.show}
                                    onHide={() => setModalShow({ show: false, link: '' })}
                                />
                            </span>
                            <br />
                            <br />
                            If your Vote By Mail application was received by the County Clerk's Office by 3pm on January 18th, you should receive a
                            ballot in the mail. Vote By Mail ballots are already postage paid, so you can drop it in a USPS mailbox, at the post
                            office or in the ballot drop box at City Hall.{' '}
                            <span style={{ color: '#c40303', fontWeight: 'bold' }}>
                                Your completed Vote By Mail ballot MUST be dropped off at City Hall or postmarked via USPS{' '}
                                <span style={{ textDecoration: 'underline' }}>on or before January 25th </span>
                                in order for your vote to count!
                            </span>{' '}
                            <br />
                            <br />
                        </p>
                        <p style={{ textAlign: 'center', fontSize: '20px', textDecoration: 'underline' }}>Bond Proposal Question</p>
                        <p style={{ fontSize: '20px' }}>
                            The Board of Education of the City of Hoboken in the County of Hudson, New Jersey is authorized (a) to construct a new
                            Hoboken High School at the John F. Kennedy Stadium site, including acquisition and installation of fixtures, furniture,
                            equipment and any site work; and (b) to appropriate $241,050,000, and to issue bonds in an amount not to exceed
                            $241,050,000.
                            <br />
                            <br />
                            The final eligible costs for the projects approved by the New Jersey Commissioner of Education are $0. The project
                            includes $241,050,000 for school facility construction elements in addition to the facilities efficiency standards
                            developed by the Commissioner of Education or not otherwise eligible for State support pursuant to N.J.S.A. 18A:7G-(5g).
                            The State debt service aid percentage will equal 0.0% of the annual debt service due with respect to the final eligible
                            costs of the projects financed with bonds.
                        </p>
                        <p style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center', paddingBottom: '20px' }}>
                            Do you approve the Bond Proposal Question? Yes/No
                        </p>

                        <img
                            src='/img/voteInfo.png'
                            alt='Image of sample ballot'
                            style={{
                                display: 'block',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                maxWidth: '70%',
                                border: '2px black solid',
                            }}
                        />
                        <p style={{ fontSize: '25px', fontWeight: 'bold', paddingTop: '30px', textAlign: 'center' }}>
                            Your vote matters!
                            <br /> This plan is #MoreThanAHighSchool <br /> Please vote YES: School Strong = Hoboken Strong!
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Vote;
