import React, { useEffect } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import GitHubIcon from '@mui/icons-material/GitHub';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { SkillLists } from '../helper/SkillLists'
import Skills from '../components/Skills'
import '../styles/About.css'

import { Grid, 
  IconButton, 
  InputAdornment, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  TextField, 
  Typography
} from '@mui/material'


import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const About = () => {
  useEffect(() => {
    document.title = "Rommel Martinez | About"
  }, []);

  return (
    <>
      <Grid id='about' container>
        {/* PHOTO AND INFO */}
        <Grid item xs={12} md={6}>
          <img src={require('../assets/photo-op.jpeg')} alt='rommel' /> 
        </Grid>      
        <Grid id='info' item xs={12} md={6}>
          <div style={{display: "flex", alignItems: "center"}}>
            <ListItemIcon>
              <PersonIcon fontSize='large' style={{ color:'#000' }} />
            </ListItemIcon>
            <ListItemText primary={<Typography id='headers' variant="h5" > About Me</Typography>} />
          </div>
          <Typography var7iant="body2" mb={2}>With nine years of work experience in full-stack web development, throughout my career, I have
            successfully developed and deployed applications using C#, ASP.NET MVC, Entity Framework Core,
            JavaScript, CSS3, and RESTful API along with designing database table structures in SQL Server.
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText>Rommel Martinez</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CallIcon />
              </ListItemIcon>
              <ListItemText>+1 (506) 476-1555</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText>rommelvmartinez@gmail.com</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText>Fredericton, New Brunswick, Canada</ListItemText>
            </ListItem> 
            <ListItem>
              <ListItemIcon>
                <LinkedInIcon />
              </ListItemIcon>
              <ListItemText>
                <a href={'https://www.linkedin.com/in/rommel-martinez-476003183/'} target='_blank' rel="noreferrer">LinkedIn</a>
              </ListItemText>
            </ListItem>   
            <ListItem>
              <ListItemIcon>
                <GitHubIcon />
              </ListItemIcon>
              <ListItemText>
                <a href={'https://github.com/rommel-martinez'} target='_blank' rel="noreferrer">GitHub</a>
              </ListItemText>
            </ListItem>                          
          </List>
        </Grid>

        <Grid id='qua' item xs={12} md={12}>
          <div style={{display: "flex", alignItems: "center"}}>
            <ListItemIcon>
              <IntegrationInstructionsIcon fontSize='large' style={{ color:'#000' }} />
            </ListItemIcon>
            <ListItemText primary={<Typography id='headers' variant="h5" > My Qualification</Typography>} />
          </div>
        </Grid>

        {SkillLists.map((item, key) => {
          return <Grid item xs={12} sm={6} md={4} lg={3} key={key}><Skills items={item} /></Grid>;
        })} 

        <Grid id='exp' item xs={12} md={6}>
          <div style={{display: "flex", alignItems: "center"}}>
            <ListItemIcon>
              <SchoolIcon fontSize='large' style={{ color:'#000' }} />
            </ListItemIcon>
            <ListItemText primary={<Typography variant="h5" > Education</Typography>} />
          </div>
          <Timeline id='timeline'>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h6" component="span">STI College</Typography>
                <Typography variant="subtitle1">Bachelor of Science in Computer Science</Typography>
                <Typography variant="subtitle2">2007 - 2012</Typography>
              </TimelineContent>
            </TimelineItem>                       
          </Timeline>

        </Grid>
        <Grid id='exp' item xs={12} md={6}>
          <div style={{display: "flex", alignItems: "center"}}>
            <ListItemIcon>
              <BusinessCenterIcon fontSize='large' style={{ color:'#000' }} />
            </ListItemIcon>
            <ListItemText primary={<Typography id='headers' variant="h5" > Experience</Typography>} />
          </div>
            <Timeline id='timeline'>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" component="span">Outreach Productions, Inc</Typography>
                  <Typography variant="subtitle1">Full-stack Web Developer</Typography>
                  <Typography variant="subtitle2">2022 - 2023</Typography>
                </TimelineContent>
              </TimelineItem>                       
            </Timeline>

            <Timeline id='timeline'>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" component="span">Almana General Hospital</Typography>
                  <Typography variant="subtitle1">Computer Programmer</Typography>
                  <Typography variant="subtitle2">2014 - 2021</Typography>
                </TimelineContent>
              </TimelineItem>                       
            </Timeline>
        </Grid>
      </Grid>
    </>
  )
}

export default About
