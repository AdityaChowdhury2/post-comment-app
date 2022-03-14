import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';


const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').
            then((response) => response.json()).
            then(data => setPosts(data));
    }, [])
    return (
        <Container>
            {posts.map(post => <Post post={post} />)}
        </Container>
    );
};

export default Home;