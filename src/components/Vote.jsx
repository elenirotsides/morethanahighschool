import '../App.css';
import vote from '../img/vote.png';
import { Row, Col } from 'react-bootstrap';

const Vote = () => {
    return (
        // <Container fluid style={{ paddingTop: '20px' }}>
        <Row className='p-5'>
            <Col xs={12} lg={3}>
                {/* height: '230px', float: 'left', paddingLeft: '20px', paddingRight: '20px' */}
                <img
                    className='img-responsive'
                    src={vote}
                    alt='Graphic that tells voters that the mail in application must be received by Jan. 18'
                    style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '70%' }}
                />
            </Col>
            <Col xs={12} lg={9}>
                <p style={{ fontSize: '20px' }}>
                    On January 25th, registered Hoboken residents will have the opportunity to vote on the proposed{' '}
                    <span
                        onClick={() => window.open('https://online.flippingbook.com/view/781450059/10/', '_blank')}
                        style={{ cursor: 'pointer', color: 'blue' }}
                    >
                        Hoboken Schools Long Range Facilities Plan
                    </span>{' '}
                    (which includes the construction of a new high school) through a special referendum. While the deadline for voter registration has
                    passed,{' '}
                    <span style={{ color: '#ba0001', fontWeight: 'bold' }}>there is still time to request a Vote By Mail ballot if you act now!</span>{' '}
                </p>
                <p style={{ fontSize: '25px', fontWeight: 'bold' }}>You can request a Vote By Mail ballot in 3 easy steps:</p>
                <ol type='1' style={{ fontSize: '20px' }}>
                    <li>Download a Vote By Mail application</li>
                    <ul>
                        <li>
                            <span
                                onClick={() =>
                                    window.open(
                                        'https://www.nj.gov/state/elections/assets/pdf/forms-vote-by-mail/vote-by-mail-english-hudson.pdf',
                                        '_blank'
                                    )
                                }
                                style={{ cursor: 'pointer', color: 'blue' }}
                            >
                                Click here for English
                            </span>
                        </li>
                        <li>
                            <span
                                onClick={() =>
                                    window.open(
                                        'https://www.nj.gov/state/elections/assets/pdf/forms-vote-by-mail/vote-by-mail-spanish-hudson.pdf',
                                        '_blank'
                                    )
                                }
                                style={{ cursor: 'pointer', color: 'blue' }}
                            >
                                Click here for Spanish
                            </span>
                        </li>
                    </ul>
                    <li>
                        Complete the application in ink, then print and sign your name where indicated. In Box 1, check the box for “Special” and
                        write “Referendum” (where it says “specify”) and enter 1/25/2022 for the date.
                    </li>
                    <li>
                        Return your completed and signed application to the County Clerk. Applications must be received by the County Clerk{' '}
                        <span style={{ color: '#ba0001', textDecoration: 'underline', fontWeight: 'bold' }}>no later than January 18th.</span>
                    </li>
                </ol>
                <p style={{ fontSize: '20px' }}>
                    Vote By Mail ballots are already postage paid, so you can drop it in a USPS mailbox, at the post office or in the ballot drop box
                    at City Hall.
                    <span style={{ color: '#ba0001', fontWeight: 'bold' }}>
                        Your completed Vote By Mail ballot MUST be dropped off at City Hall or postmarked via USPS{' '}
                        <span style={{ textDecoration: 'underline' }}>on or before January 25th</span> in order for your vote to count!
                    </span>
                </p>
                <p style={{ fontSize: '20px' }}>
                    Registered voters who do not request a Vote By Mail ballot will have the ability to vote in-person on January 25th from 6am-8pm.{' '}
                    <span style={{ color: '#ba0001', fontWeight: 'bold' }}>
                        Find your polling site location at{' '}
                        <a href='https://voter.svrs.nj.gov/polling-place-search'>https://voter.svrs.nj.gov/polling-place-search</a> and make a plan
                        now to vote!
                    </span>
                </p>
                <p style={{ fontSize: '25px', fontWeight: 'bold' }}>
                    Your vote matters!
                    <br /> This plan is #MoreThanAHighSchool. <br /> Please vote YES: School Strong = Hoboken Strong!
                </p>
            </Col>
            {/* <Col xs={12}></Col> */}
        </Row>
        // </Container>
    );
};

export default Vote;
