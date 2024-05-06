import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Home from '@mui/icons-material/Home';
import People from '@mui/icons-material/People';
import DescriptionIcon from '@mui/icons-material/Description';
import '../styles/Navbar.css'

const Navbar = () => {
const [openLink, setOpenLinks] = useState(false);

const toggleNavbar = () => {
    setOpenLinks(!openLink);
}

  return (
    <div className='navbar'>
        <label className='menu-toggle' onClick={toggleNavbar}>
          <MenuIcon />
        </label>
        <a className='header' href="/"> WEB DEVELOPER</a>
        <ul className='menus' id={openLink ? 'open' : 'close'}>
          <li><a href="/"> HOME</a></li>
          <li><a href="/About"> ABOUT</a></li>
          <li><a href="/Portfolio"> PORTFOLIO</a></li>
        </ul>

        <Drawer open={openLink} onClick={toggleNavbar}
           PaperProps={{ sx: { backgroundColor: "#263238", color: "#fff" } }}>
          <Box sx={{ width:250 }} role="presentation">
            <List>
              <ListItem>
                <ListItemButton href='/'>
                  <ListItemIcon>
                      <Home style={{color:"#fff"}} />
                  </ListItemIcon>                 
                  <ListItemText primary={'Home'} />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton href='/About'>
                  <ListItemIcon>
                      <People style={{color:"#fff"}} />
                  </ListItemIcon>                 
                  <ListItemText primary={'About'} />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton href='/Portfolio'>
                  <ListItemIcon>
                      <DescriptionIcon style={{color:"#fff"}} />
                  </ListItemIcon> 
                  <ListItemText primary={'Portfolio'} />
                </ListItemButton>
              </ListItem>
            </List>          
          </Box>
        </Drawer>

    </div>
  )
}

export default Navbar
