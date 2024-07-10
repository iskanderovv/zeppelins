import { useState } from 'react';
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText, IconButton, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Container from '../../utils/container/Container';
import logo from '../../images/logo.svg';

export default function Navbar() {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: '360px' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: '16px'
      }}>
        <Link to='/' className='flex-1 h-20 items-center flex'>
          <img width={150} src={logo} alt="logo" />
        </Link>
        <IconButton onClick={toggleDrawer(anchor, false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List disablePadding>
        {[
          ['PORTFOLIO', '#'],
          ['BLOG', '#'],
          ['CV', '#'],
          ['STORE', '#'],
          ['FREELANCE', '#'],
          ['ABOUT ME', '#'],
          ['CONTACT', '#'],
        ].map(([title, url], index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton component={Link} to={url}>
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Container>
      <nav className='flex items-center'>
        <Drawer
          anchor='right'
          open={state.right}
          onClose={toggleDrawer('right', false)}
        >
          {list('right')}
        </Drawer>
        <Link to='/' className='flex-1 h-20 items-center flex'>
          <img width={260} src={logo} alt="logo" />
        </Link>
        <List sx={{
          display: { lg: 'flex', md: 'flex', sm: 'none', xs: 'none' }
        }} className='flex gap-7 '>
          {[
            ['PORTFOLIO', '#'],
            ['BLOG', '#'],
            ['CV', '#'],
            ['STORE', '#'],
            ['FREELANCE', '#'],
            ['ABOUT ME', '#'],
            ['CONTACT', '#'],
          ].map(([title, url], index) => (
            <ListItem disablePadding key={index}>
              <Link className='font-medium text-[14px] text-nowrap' to={url}>{title}</Link>
            </ListItem>
          ))}
        </List>
        <Button sx={{
          display: { lg: 'none', md: 'none', sm: 'inline-block', xs: 'inline-block' }
        }} onClick={toggleDrawer('right', true)}><MenuIcon /></Button>
      </nav>
    </Container>
  );
}
