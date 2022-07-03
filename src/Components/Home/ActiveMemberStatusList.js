import {
    Col,
    Badge,
    ListGroup,
} from "react-bootstrap";
import { FaUserCircle } from 'react-icons/fa';

const ActiveMemberStatusList = ({ posts }) => {
    return (
        <Col md={3} className="activemenber-column">
            {posts.map(singlePost => {
                let randomIsActive = Math.ceil(Math.random() * 2) % 2;
                return < ListGroup as="ul" key={singlePost.id} >
                    <ListGroup.Item
                        as="li"
                        className={`d-flex justify-content-between align-items-start ${randomIsActive ? "inactive" : ""}`}
                        key={singlePost.id}
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold"> <FaUserCircle />{singlePost.author}</div>
                        </div>
                        {
                            !randomIsActive ?
                                <Badge bg="success" pill>Active</Badge>
                                :
                                <Badge bg="secondary" pill>Away</Badge>
                        }

                    </ListGroup.Item>
                </ListGroup>
            })}
        </Col >
    )
}

export default ActiveMemberStatusList