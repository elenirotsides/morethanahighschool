import '../App.css';
import { Container, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container>
            <Row style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                {' '}
                <div style={{ textAlign: 'center' }}>
                    <div style={{ border: '5px #c40303 solid', borderRadius: '2rem', backgroundColor: '#c40303' }}>
                        {' '}
                        <h1 style={{ color: 'white', fontSize: '30px' }}>We are the Friends of the New Hoboken High School</h1>
                    </div>
                </div>
            </Row>
            <Row style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                <div className='contact' style={{ border: ' 5px #a7a6a6 solid', borderRadius: '2rem', backgroundColor: '#a7a6a6' }}>
                    <p>
                        We are a group of Hoboken parents and residents who are proud of our schools, invested in and committed to Hoboken’s future,
                        and thrilled about the opportunity to make this major investment in our community. We believe a new High School can benefit
                        everyone in Hoboken. For our children and students - a public education journey that will be enhanced and more fully supported
                        beginning in their elementary and middle school years and culminating in a state-of-the-art high school featuring classrooms,
                        labs, and spaces equipped for 21st century learning and success. Further, all Hoboken residents and families will have the
                        opportunity to utilize arts and recreation facilities that will help meet the needs of our growing city. <br /> <br />
                        <span style={{ fontWeight: 'bold' }}>
                            We understand that this is #MoreThanAHighSchool - this is the chance to build for the future of our schools and our
                            community!
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

                    <p>
                        <span style={{ fontWeight: 'bold' }}>Questions?</span>{' '}
                        <a href='mailto: morethanahighschool@gmail.com' style={{ color: 'blue' }}>
                            morethanahighschool@gmail.com
                        </a>
                    </p>
                </div>
            </Row>
        </Container>
    );
};

export default Contact;
