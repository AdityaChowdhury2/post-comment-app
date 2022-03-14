import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    const { title, body, id } = post;
    return (
        <Box
            sx={{}}>
            <Typography variant='h5' component='h1'> {title}</Typography>
            <Typography variant='body2' component='p'> {body}</Typography>
            <Link to={`/postDetails/${id}`} >see more</Link>
        </Box>

    );
};

export default Post;