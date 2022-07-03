import { useState, useEffect } from "react";
import dummyText from '../../assests/dummyText.json';
import dummyPostTime from '../../assests/dummyPostTime.json';
import dummyChatListContent from '../../assests/dummyChatListContent.json';
import { Container, Row } from "react-bootstrap";
import axios from 'axios';
import './Home.css';
import ActiveMemberStatusList from "./ActiveMemberStatusList";
import ChatList from "./ChatList";
import Posts from "./Posts";

const Home = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            try {
                const res = await axios.get('https://picsum.photos/v2/list')
                const resPosts = [...res.data]
                const postsWithRandomLikesAndComments = resPosts.map(singlePost => {
                    const likeCount = Math.ceil(Math.random() * 1000)
                    const commentCount = Math.ceil(Math.random() * 10)
                    const time = dummyPostTime[Math.ceil(Math.random() * 9)]
                    const text = dummyText[Math.ceil(Math.random() * 3)]
                    const isLikedByCurrentUser = false
                    return {
                        ...singlePost,
                        likeCount,
                        commentCount,
                        time,
                        text,
                        isLikedByCurrentUser,
                    }
                })
                setPosts(postsWithRandomLikesAndComments)
            }
            catch (err) {
                console.log(err)
            }
        }
        getPosts()
    }, [])

    const randomChatList = (posts) => {
        posts.filter(singlePost => {
            return Number(singlePost.id) % 5 === 0
        }).map(singlePost => {
            singlePost.chat = dummyChatListContent[Math.ceil(Math.random() * 7)]
            return singlePost
        })
    }
    randomChatList(posts)

    return (
        <Container className="post-container">
            <Row>
                <ActiveMemberStatusList posts={posts} />
                <Posts posts={posts} setPosts={setPosts} />
                <ChatList posts={posts} />
            </Row>
        </Container >
    )
}

export default Home

/* -------------------------------------------------- */

// axios.get('https://picsum.photos/v2/list')
//     .then(res => console.log(res.data))
//     .catch(err => console.log(err))