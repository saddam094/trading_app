import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';

export const DrawerSection = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <div>
      {/* Menu Button */}
      <IconButton onClick={toggleDrawer(true)} edge="start" aria-label="menu">
        <MenuIcon className="text-white" />
      </IconButton>

      {/* Drawer */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <div className=' flex h-16 py-2 bg-slate-950 justify-evenly items-center'>
          <button className='px-2 h-8 rounded-md bg-green-600 text-center text-white font-semibold'>CASINO</button>
          <button className='px-2 h-8 rounded-md bg-green-600 text-center text-white font-semibold'>SPORTS</button>
        </div>
        <div className='h-full w-52 bg-slate-900 text-white px-4'>
          <List>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon style={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <InfoIcon style={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <WorkIcon style={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Services" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <ContactMailIcon style={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
};
