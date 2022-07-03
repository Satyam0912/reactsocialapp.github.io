import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import logoIcon from '../assests/socialIcon3.png';
import './NavbarComponent.css';

const NavbarComponent = () => {
    const navbarStyle = { backgroundColor: '#161d86', boxShadow: '0 0 20px 0 skyblue', marginBottom: '10px' }
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            variant="dark"
            style={navbarStyle}>
            <Container>
                <Navbar.Brand
                    href="/"
                    className='box-shadow'
                    style={{ fontWeight: 'bold', color: 'skyblue' }}>
                    <img
                        src={logoIcon}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo" />
                    {" "}Social App
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='box-shadow' />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/' className='box-shadow' >Home</Nav.Link>
                        <Nav.Link as={Link} to='/about' className='box-shadow' >About Us</Nav.Link>
                        <Nav.Link as={Link} to='/contact' className='box-shadow' >Contact Us</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to='/signup' className='box-shadow' >Sign Up</Nav.Link>
                        <Nav.Link as={Link} to='/login' className='box-shadow' >Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent