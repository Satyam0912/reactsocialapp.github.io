import { Row, Col, Card, Spinner, Button, Badge } from "react-bootstrap";
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
import { FaRegComment, FaUserCircle } from 'react-icons/fa';

const Posts = ({ posts, setPosts }) => {

    const incrementComment = (arrivalIndex) => {
        const updatedPost = posts.map((singlePost, index) => {
            if (arrivalIndex === index) {
                singlePost.commentCount += 1
            }
            return singlePost
        })
        setPosts(updatedPost)
    }

    const toggleLike = (arrivalIndex) => {
        const updatedPost = posts.map((singlePost, index) => {
            if (arrivalIndex === index) {
                if (singlePost.isLikedByCurrentUser) {
                    singlePost.likeCount -= 1
                    singlePost.isLikedByCurrentUser = false
                }
                else {
                    singlePost.likeCount += 1
                    singlePost.isLikedByCurrentUser = true
                }
            }
            return singlePost
        })
        setPosts(updatedPost)
    }

    return (
        <Col md={6} className="posts-column">
            <Row>
                {posts.length ? posts.map((singlePost, index) =>
                    <Col key={singlePost.id} md={12} className="singlePost">
                        <Card className="singlePost-card">
                            <Card.Header
                                className="singlePost-header"
                                style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
                                <div>
                                    <FaUserCircle />{" "}{singlePost.author}
                                </div>
                                <p style={{ marginBottom: '0' }}>{singlePost.time}</p>
                            </Card.Header>
                            <Card.Img variant="top" src={singlePost.download_url} className="photo-img" />
                            <Card.Body
                                className="singlePost-body"
                                style={{ borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
                                <p className="lead">{singlePost.text}</p>
                                <Row>
                                    <Col md={{ span: 5, offset: 0 }}>
                                        <Button
                                            className="singlePost-btn"
                                            onClick={() => incrementComment(index)}>
                                            <FaRegComment />
                                            <Badge pill bg="light" text="dark">{singlePost.commentCount}</Badge>
                                        </Button>
                                        <Button
                                            className="singlePost-btn"
                                            onClick={() => toggleLike(index)}>
                                            {singlePost.isLikedByCurrentUser ? < AiFillLike /> : < AiOutlineLike />}
                                            <Badge pill bg="light" text="dark">{singlePost.likeCount}</Badge>
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
        </Col>
    )
}

export default Posts