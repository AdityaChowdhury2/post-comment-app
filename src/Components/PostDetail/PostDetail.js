import { Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const params = useParams({});
    const [singlePost, setSinglePost] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then((response => response.json())).
            then(data => setSinglePost(data))
    }, [])
    return (
        <>
            <Container>
                <Typography variant='h3' component='h2'>{singlePost.title}</Typography>
                <Typography variant='body1' component='p'>{singlePost.body}</Typography>
            </Container>
        </>
    );
};

export default PostDetail;