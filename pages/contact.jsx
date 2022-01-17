import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container>
            <Row style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                <Col>
                    {' '}
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ border: '5px #c40303 solid', backgroundColor: '#c40303' }}>
                            {' '}
                            <h1 style={{ color: 'white', fontSize: '30px' }}>We are Friends of the New Hoboken High School</h1>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                <Col>
                    <div className='contact p-3' style={{ border: ' 5px white solid', backgroundColor: 'white' }}>
                        <p>
                            The Friends of the New Hoboken High School is a group of Hoboken residents who have engaged in detailed data-seeking
                            conversations with members of the Hoboken Public School District Board and Administration, in order to gather and prepare
                            the information presented in this website. Our goal is to ensure voters get access to the details and facts of the plan
                            they need in order to make an <span style={{ textDecoration: 'underline' }}>informed</span> decision on the Referendum
                            vote taking place Jan 25th.
                            <br /> <br />
                            We are actively involved in our schools, we are committed to the success of Hoboken's future, and we wholeheartedly
                            endorse the opportunity to make this critical investment in our district and broader community.
                            <br /> <br />
                            We strongly believe the plan proposed by the Referendum can benefit the entire city. For our children and students it
                            represents an enhanced and more fully supported educational experience in their elementary and middle school years,
                            culminating in a 21st century academic program reliant on a state-of-the-art high school equipped with classrooms, labs,
                            and spaces designed to implement the Hoboken Public School district’s cutting edge curriculum. Further, all Hoboken
                            residents will have the opportunity to utilize arts, recreation and other community facilities that will help meet the
                            needs of our diverse and growing population.
                            <br /> <br />
                            <span style={{ fontWeight: 'bold' }}>
                                We understand that this is #MoreThanAHighSchool - this is the chance to build for the future of our schools and our
                                community, and we urge you to vote YES!
                            </span>
                        </p>

                        <ul style={{ listStyle: 'none' }}>
                            <li>Adrienne Appell</li>
                            <li>Antonio Grana</li>
                            <li>Bethlehem Gregory</li>
                            <li>Erica Gavin</li>
                            <li>Jane Mylan</li>
                            <li>Kim Church</li>
                            <li>Laura Block</li>
                            <li>Michele Daly</li>
                            <li>Nicole Jala</li>
                            <li>Renee Perry</li>
                            <li>Tatyana Zlotsky </li>
                        </ul>

                        <p style={{ fontStyle: 'italic' }}>
                            <span onClick={() => window.open('http://bit.ly/3KbbGvf', '_blank')} style={{ cursor: 'pointer', color: 'blue' }}>
                                This folder
                            </span>{' '}
                            contains many of the resources found on this website, in addition to some printables. These materials are being presented
                            to help inform the broader community of the facts, and get out the YES vote!
                        </p>

                        <p>
                            <span style={{ fontWeight: 'bold' }}>Questions?</span>{' '}
                            <a className='link' href='mailto: morethanahighschool@gmail.com' style={{ color: 'blue' }}>
                                morethanahighschool@gmail.com
                            </a>
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
