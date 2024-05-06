import React from 'react'
import '../styles/Home.css'
import { Grid, Typography, Button } from '@mui/material'

const Home = () => {
  return (
    <>
      <Grid id='home' container>
        <Grid id='name' item xs={12} sm={6}>
          <Typography variant="h2" mb={1}>Hi, I'm Rommel</Typography>
          <Typography variant="h5" mb={2}>FULL STACK WEB DEVELOPER</Typography>
          <Button id='download' variant="outlined" href={require('../assets/Resume.pdf')} download='Rommel Martinez' mb={6}>Download Resume</Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={require('../assets/photo.jfif')} alt='rommel' />      
        </Grid>
      </Grid>
    </>
  )
}

export default Home
