import './App.css';
import img from './img/img1.png';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

import Home from './components/Home';
import About from './components/About';
import Vote from './components/Vote';
import Contact from './components/Contact';

const App = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
                <Container fluid>
                    <Navbar.Brand href='/' style={{ color: 'white', fontWeight: 'bold' }}>
                        Friends of Hoboken High School
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='me-auto'>
                            <Nav.Link href='about' style={{ color: 'white' }}>
                                About
                            </Nav.Link>
                            <Nav.Link href='vote' style={{ color: 'white' }}>
                                Vote
                            </Nav.Link>
                            <Nav.Link href='contact' style={{ color: 'white' }}>
                                Contact
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link>
                                <FacebookIcon
                                    style={{ fontSize: '40px', cursor: 'pointer', color: '#d60001' }}
                                    onClick={() => window.open('https://www.facebook.com/Morethanahighschool', '_blank')}
                                />
                            </Nav.Link>
                            <Nav.Link>
                                <InstagramIcon
                                    style={{ fontSize: '40px', cursor: 'pointer', color: '#d60001' }}
                                    onClick={() => window.open('https://www.instagram.com/morethanahighschool/', '_blank')}
                                />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container fluid style={{ backgroundColor: '#d60001' }}>
                <img src={img} style={{ height: '400px' }} alt="Graphic that urges voters to vote 'Yes' on Jan. 25"></img>
            </Container>
            {/* <Carousel variant='dark'>
                <Carousel.Item style={{ height: '400px' }}>
                    <img className='d-block w-100' src={img} alt='First slide' style={{ height: '400px' }} />
                </Carousel.Item>
                <Carousel.Item style={{ height: '400px' }}>
                    <img className='d-block w-100' src={logo} alt='Second slide' style={{ height: '400px' }} />
                </Carousel.Item>
            </Carousel> */}
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='vote' element={<Vote />} />
                    <Route path='contact' element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};
export default App;
