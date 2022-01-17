import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

export default function Layout({ children }) {
    return (
        <div style={{ backgroundColor: '#b1b1b1' }}>
            <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
                <Container fluid style={{ textAlign: 'center' }}>
                    <Navbar.Brand>
                        <Link href='/' passHref>
                            <img
                                src='/img/logo.png'
                                // width={70}
                                // height={70}
                                style={{ width: '70px', marginRight: '30px', cursor: 'pointer' }}
                                alt='The logo of "Friends of the New Hoboken High School" organization'
                            />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='me-auto'>
                            <Link href='/' passHref>
                                <a className='navLink'>Home</a>
                            </Link>
                            <Link href='/key-facts' passHref>
                                <a className='navLink'>Key Facts</a>
                            </Link>
                            <Link href='/vote' passHref>
                                <a className='navLink'>Vote</a>
                            </Link>
                            <Link href='/testimonials' passHref>
                                <a className='navLink'>Testimonials</a>
                            </Link>
                            <Link href='/op-eds' passHref>
                                <a className='navLink'>Op-Eds</a>
                            </Link>
                            <Link href='/contact' passHref>
                                <a className='navLink'>Who We Are</a>
                            </Link>
                        </Nav>
                        <Nav>
                            <Nav.Link>
                                <FacebookIcon
                                    style={{ fontSize: '40px', cursor: 'pointer', color: '#d60001' }}
                                    onClick={() => window.open('https://www.facebook.com/Morethanahighschool', '_blank')}
                                    aria-label="Opens a new window to Friends of the New Hoboken High School's Facebook Page"
                                />
                            </Nav.Link>
                            <Nav.Link>
                                <InstagramIcon
                                    style={{ fontSize: '40px', cursor: 'pointer', color: '#d60001' }}
                                    onClick={() => window.open('https://www.instagram.com/morethanahighschool/', '_blank')}
                                    aria-label="Opens a new window to Friends of the New Hoboken High School's Instagram Page"
                                />
                            </Nav.Link>
                            <Nav.Link>
                                <TwitterIcon
                                    style={{ fontSize: '40px', cursor: 'pointer', color: '#d60001' }}
                                    onClick={() => window.open('https://twitter.com/newhobokenhs/', '_blank')}
                                    aria-label="Opens a new window to Friends of the New Hoboken High School's Twitter Page"
                                />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container fluid style={{ backgroundColor: '#d60001', textAlign: 'center' }}>
                <Row>
                    <Col xs={12}>
                        <img src='/img/img3.png' alt="Graphic that urges voters to vote 'Yes' on Jan. 25" style={{ width: '50%' }} />
                    </Col>{' '}
                </Row>
            </Container>
            <div>{children}</div>
            <Navbar bg='dark' variant='dark' sticky='bottom'>
                <Container fluid>
                    <Navbar.Text className='navText m-2'>
                        <span style={{ fontSize: '20px' }}>Paid for by Friends of the New Hoboken High School</span> <br />
                        <span style={{ fontSize: '15px' }}>600 Jackson Street, Hoboken, NJ 07030</span>
                    </Navbar.Text>
                    <Nav>
                        <Nav.Link>
                            <FacebookIcon
                                style={{ fontSize: '20px', cursor: 'pointer', color: '#d60001' }}
                                onClick={() => window.open('https://www.facebook.com/Morethanahighschool', '_blank')}
                                aria-label="Opens a new window to Friends of the New Hoboken High School's Facebook Page"
                            />
                        </Nav.Link>
                        <Nav.Link>
                            <InstagramIcon
                                style={{ fontSize: '20px', cursor: 'pointer', color: '#d60001' }}
                                onClick={() => window.open('https://www.instagram.com/morethanahighschool/', '_blank')}
                                aria-label="Opens a new window to Friends of the New Hoboken High School's Instagram Page"
                            />
                        </Nav.Link>
                        <Nav.Link>
                            <TwitterIcon
                                style={{ fontSize: '20px', cursor: 'pointer', color: '#d60001' }}
                                onClick={() => window.open('https://twitter.com/newhobokenhs/', '_blank')}
                                aria-label="Opens a new window to Friends of the New Hoboken High School's Twitter Page"
                            />
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}
