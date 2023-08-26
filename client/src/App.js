import React from 'react'
import {Typography, AppBar, Container, Grow, Grid} from '@material-ui/core'
import memories from './memories.png'
import Form from './Components/Form/Form'
import Posts from './Components/Posts/Posts'

function App() {
  return (
    <Container maxWidth = "lg">
      <AppBar position='static' color = "inherit">
        <Typography variant='h2' align='center'>
          Memories
        </Typography>
        <img src= {memories} alt='memories' height= "500"/>
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