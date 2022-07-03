import {
    Col,
    Badge,
    ListGroup
} from "react-bootstrap";
import { FaUserCircle } from 'react-icons/fa';

const ChatList = ({ posts }) => {

    const postsChatList = posts.filter(singlePost => Number(singlePost.id) % 5 === 0)
    return (
        <Col md={3} className="chatlist-column">
            {postsChatList.map(singlePost =>
                <ListGroup as="ul" key={singlePost.id} >
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold"> <FaUserCircle />{singlePost.author}</div>
                            <span style={{ color: 'greenyellow' }}>{singlePost.chat.message}</span>
                        </div>
                        <Badge bg="primary" pill>{singlePost.chat.messageCount}</Badge>
                    </ListGroup.Item>
                </ListGroup>
            )}
        </Col>
    )
}

export default ChatList