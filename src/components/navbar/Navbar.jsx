import * as React from 'react';
import { useState } from 'react';
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Container from '../../utils/container/Container';
import logo from '../../images/logo.svg';
import ReactFlagsSelect from 'react-flags-select';
import { useTranslation } from 'react-i18next';
import i18n from '../../locales/i18next'



export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = useState("");
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
          <img width={200} src={logo} alt="logo" />
        </Link>
        <IconButton onClick={toggleDrawer(anchor, false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <ReactFlagsSelect
          countries={['UZ', 'RU', 'US', 'FR']}
          customLabels={{ UZ: 'UZ', RU: 'RU', US: 'EN', FR: 'FR' }}
          onSelect={handleSelect}
          selected={currentLanguage}
          placeholder={currentLanguage}
        />
      <List disablePadding>
        {[
          [t('portfolio'), '#'],
          [t('blog'), '#'],
          [t('cv'), '#'],
          [t('store'), '#'],
          [t('freelance'), '#'],
          [t('about'), '#'],
          [t('contact'), '#'],
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

  const handleSelect = (countryCode) => {
    switch (countryCode) {
      case 'UZ':
        i18n.changeLanguage('uz');
        break;
      case 'RU':
        i18n.changeLanguage('ru');
        break;
      case 'US':
        i18n.changeLanguage('en');
        break;
      case 'FR':
        i18n.changeLanguage('fr');
        break;
      default:
        break;
    }
  };

  const currentLanguage = i18n.language.substring(0, 2).toUpperCase();
  
  return (
    <Container>
      <nav className='flex items-center mt-16'>
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
        <ReactFlagsSelect
        className='lg:block md:block sm:block hidden'
          countries={['UZ', 'RU', 'US', 'FR']}
          customLabels={{ UZ: 'UZ', RU: 'RU', US: 'EN', FR: 'FR' }}
          onSelect={handleSelect}
          selected={currentLanguage}
          placeholder={currentLanguage}
        />
        <List sx={{
          display: { lg: 'flex', md: 'flex', sm: 'none', xs: 'none' }
        }} className='flex gap-7'>
          {[
            [t('portfolio'), '#'],
            [t('blog'), '#'],
            [t('cv'), '#'],
            [t('store'), '#'],
            [t('freelance'), '#'],
            [t('about'), '#'],
            [t('contact'), '#'],
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
