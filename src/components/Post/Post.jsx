import './Post.css';
import Comment from '../../assets/img/comment.png';
import Share from '../../assets/img/share.png';
import Heart from '../../assets/img/like.png';
import HeartNotFill from '../../assets/img/notlike.png';
import Carousel from 'react-bootstrap/Carousel';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUser } from '../../service/UserService.js';
import { likePost } from '../../service/PostService.js';

/*
 * @author Đào Duy Thái
 * @date 14/02/2024
 * @des individual post of a user
 */
const Post = ({ post }) => {
    const userId = localStorage.getItem('UserId');
    const [user, setUser] = useState({});
    const [likes, setLikes] = useState(post.likes.map((like) => like.userId));
    const [like, setLike] = useState(likes.includes(userId));

    useEffect(() => {
        getUser(post.userId)
            .then((res) => setUser(res.data))
            .catch((e) => console.error(e));
    }, []);

    function handleLike() {
        const body = {
            userId: userId,
        };
        if (!like) {
            likePost(post._id, body)
                .then(() => {
                    setLike(true);
                    setLikes([...likes, userId]);
                })
                .catch((e) => console.error(e));
        }
    }

    return (
        <div className="Post">
            <div className="postNavbar">
                <div className="postUser">
                    <img
                        className="postAvatar"
                        src="https://www.w3schools.com/w3images/avatar1.png"
                        alt="BackgroundPicture"
                    />
                    <span>
                        <b>{user.fullName}</b>
                    </span>
                </div>
                <Dropdown>
                    <Dropdown.Toggle
                        variant="light"
                        id="dropdown-basic"
                    ></Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/">Delete</Dropdown.Item>
                        <Dropdown.Item href="/">Another action</Dropdown.Item>
                        <Dropdown.Item href="/">Report</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className="post-content">
                <p>{post.content}</p>
            </div>
            <Carousel>
                {post.image.map((image, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="postImage"
                            src={image}
                            alt="BackgroundPicture"
                        />
                    </Carousel.Item>
                ))}
            </Carousel>

            <div className="postReact">
                <img
                    src={like ? Heart : HeartNotFill}
                    alt=""
                    style={{ cursor: 'pointer' }}
                    onClick={handleLike}
                />
                <Link to={`/post/${post._id}`}>
                    <img src={Comment} alt="" />
                </Link>
                <img src={Share} alt="" />
            </div>

            <span style={{ color: 'var(--gray)', fontSize: '12px' }}>
                {post.likes.length} likes
            </span>
        </div>
    );
};

export default Post;
