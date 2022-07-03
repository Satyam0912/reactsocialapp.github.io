
import { Container, Card, Col } from 'react-bootstrap';

const Contacts = () => {

    const cardStyle = {
        backgroundColor: '#3D0000',
        color: 'bisque',
        border: '2px solid blue'
    }

    return (
        <Container style={{ height: '80vh', display: 'flex', alignItems: 'center' }} >
            <Col md={{ span: 8, offset: 2 }} className="box-shadow" style={{ margin: 'auto', padding: '0' }}>
                <Card className="text-center" style={cardStyle}>
                    <Card.Header
                        style={{ textAlign: 'left', fontWeight: 'bold', backgroundColor: '#3D0000', color: 'bisque', border: '2px solid bluevoilet', borderRadius: 'inherit' }}>
                        <h1>Social App Contact Info</h1>
                        <div style={{ height: '2px', width: '100%', backgroundColor: 'blue' }}></div>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>
                            <h1>connectsocialapp@gmail.com</h1>
                            <h1>Contact/WhatsApp: +91 9988776655</h1>
                        </Card.Title>
                    </Card.Body>
                    <Card.Footer>Thankyou</Card.Footer>
                </Card>
            </Col>
        </Container>
    )
}

export default Contacts