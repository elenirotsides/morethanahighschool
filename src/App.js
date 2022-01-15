import './App.css';
import img3 from './img/img3.png';
import logo from './img/logo.png';
import { BrowserRouter, Route, Routes, Navigate, Link } from 'react-router-dom';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Home from './components/Home';
import KeyFacts from './components/KeyFacts';
import Vote from './components/Vote';
import Testimonials from './components/Testimonials';
import OpEds from './components/OpEds';
import Contact from './components/Contact';

const App = () => {
    return (
        <div style={{ backgroundColor: '#b1b1b1' }}>
            <BrowserRouter>
                <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
                    <Container fluid style={{ textAlign: 'center' }}>
                        <Navbar.Brand>
                            <Link to='/'>
                                <img
                                    src={logo}
                                    style={{ width: '70px', marginRight: '30px' }}
                                    alt='The logo of "Friends of the New Hoboken High School" organization'
                                />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className='me-auto'>
                                <Link className='navLink' to='/' style={{ color: 'white', fontSize: '20px' }}>
                                    Home
                                </Link>
                                <Link className='navLink' to='/key-facts' style={{ color: 'white', fontSize: '20px' }}>
                                    Key Facts
                                </Link>
                                <Link className='navLink' to='/vote' style={{ color: 'white', fontSize: '20px' }}>
                                    Vote
                                </Link>
                                <Link className='navLink' to='/testimonials' style={{ color: 'white', fontSize: '20px' }}>
                                    Testimonials
                                </Link>
                                <Link className='navLink' to='/op-eds' style={{ color: 'white', fontSize: '20px' }}>
                                    Op-Eds
                                </Link>
                                <Link className='navLink' to='/contact' style={{ color: 'white', fontSize: '20px' }}>
                                    Who We Are
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
                            <img src={img3} alt="Graphic that urges voters to vote 'Yes' on Jan. 25" style={{ width: '50%' }} />
                        </Col>{' '}
                    </Row>
                </Container>

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='key-facts' element={<KeyFacts />} />
                    <Route path='vote' element={<Vote />} />
                    <Route path='testimonials' element={<Testimonials />} />
                    <Route path='op-eds' element={<OpEds />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>

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
            </BrowserRouter>
        </div>
    );
};
export default App;
