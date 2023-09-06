import React from 'react'
import Post from './Post/Post'
import useStyles from './Styles';
import { useSelector } from 'react-redux';

function Posts() {
  const classes = useStyles();
  const posts1 = useSelector((state) => state.posts);
  
  return (
    <>
    <div>Posts</div>
    <Post/>
    <Post/>
    </>
    
  )
}

export default Posts