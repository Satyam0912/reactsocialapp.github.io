import { useState, useEffect } from "react";
import dummyText from '../../assests/dummyText.json';
import dummyPostTime from '../../assests/dummyPostTime.json';
import { Container, Row, Col, Card, Spinner, Button, Badge } from "react-bootstrap";
import { AiOutlineLike } from 'react-icons/ai';
import { FaRegComment, FaUserCircle } from 'react-icons/fa';
import axios from 'axios';
import './Posts.css';

const Photos = () => {

    const [photos, setPhotos] = useState([])

    useEffect(() => {
        const getPhotos = async () => {
            try {
                const res = await axios.get('https://picsum.photos/v2/list')
                setPhotos(res.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        getPhotos()
    }, [])

    return (
        <Container className="post-container">
            <Row>
                {photos.length ? photos.map(singlePost =>
                    <Col key={singlePost.id} md={12} className="singlePost">
                        <Card className="singlePost-card">
                            <Card.Header
                                className="singlePost-header"
                                style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
                            >
                                <div>
                                    <FaUserCircle />{" "}{singlePost.author}
                                </div>
                                <p style={{ marginBottom: '0' }}>
                                    {dummyPostTime[Math.ceil(Math.random() * 9)]}
                                </p>
                            </Card.Header>
                            <Card.Img variant="top" src={singlePost.download_url} className="photo-img" />
                            <Card.Body
                                className="singlePost-body"
                                style={{ borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}
                            >
                                <p className="lead">
                                    {dummyText[Math.ceil(Math.random() * 3)]}
                                </p>
                                <Row>
                                    <Col md={{ span: 5, offset: 0 }}>
                                        <Button
                                            className="singlePost-btn"
                                        >
                                            <FaRegComment />
                                            <Badge pill bg="light" text="dark">
                                                50
                                            </Badge>
                                        </Button>
                                        <Button
                                            className="singlePost-btn"
                                        >
                                            <AiOutlineLike />
                                            <Badge pill bg="light" text="dark">
                                                551
                                            </Badge>
                                        </Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                ) : <div className="spinner-wrapper">
                    <Spinner animation="border" role="status"></Spinner>
                </div>}
            </Row>
        </Container >
    )
}

export default Photos

/* -------------------------------------------------- */

// axios.get('https://picsum.photos/v2/list')
//     .then(res => console.log(res.data))
//     .catch(err => console.log(err))