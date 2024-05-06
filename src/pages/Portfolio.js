import React, { useEffect } from 'react'
import {ProjectList} from '../helper/ProjectList'
import { Grid } from '@mui/material';
import Proj from '../components/Project'
import '../styles/Portfolio.css'

const Portfolio = () => {
  useEffect(() => {
    document.title = "Rommel Martinez | Portfolio"
  }, []);

  return (
    <>
      <Grid id='portfolio' container>
        {ProjectList.map((item, key) => {
          return <Grid item xs={12} sm={6} md={4} lg={3} key={key}>
                  <Proj items={item} />
                  </Grid>;
        })}
      </Grid>
    </>
  )
}

export default Portfolio
