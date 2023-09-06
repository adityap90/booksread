import React, { useEffect } from 'react'
import {Typography, AppBar, Container, Grow, Grid} from '@material-ui/core'
import memories from './memories.png'

import {getPosts} from './actions/posts'
import Form from './Components/Form/Form'
import Posts from './Components/Posts/Posts';
import useStyles from './styles'
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts())
  },[dispatch])
  const classes = useStyles();
  return (
    <Container maxWidth = "lg">
      <AppBar className = {classes.appBar} position='static' color = "inherit">
        <Typography className = {classes.heading} variant='h2' align='center'>
          Memories
        </Typography>
        <img className= {classes.image} src= {memories} alt='memories' height= "60"/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify = "space-between" alignItems='stretch' spacing={3}>
            <Grid xs = {12} sm = {7}>
              <Posts/>
            </Grid>
            <Grid xs = {12} sm = {4}>
              <Form/>
              </Grid>
          </Grid>
        </Container>
      </Grow>

    </Container>
  )
}

export default App