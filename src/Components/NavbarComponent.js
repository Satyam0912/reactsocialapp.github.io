import { Navbar, Nav, Container, } from 'react-bootstrap';
import logoIcon from '../assests/socialIcon3.png';
import './NavbarComponent.css';

const NavbarComponent = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" style={{ backgroundColor: '#161d86', boxShadow: '0 0 20px 0 skyblue' }}>
            <Container>
                <Navbar.Brand
                    href="/"
                    className='box-shadow'
                >
                    <img
                        src={logoIcon}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    {" "}
                    Social App
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='box-shadow' />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="me-auto">
                        <Nav.Link className='box-shadow' >Posts</Nav.Link>
                        <Nav.Link className='box-shadow' >About Us</Nav.Link>
                        <Nav.Link className='box-shadow' >Contact Us</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className='box-shadow' >Sign Up</Nav.Link>
                        <Nav.Link className='box-shadow' >Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent