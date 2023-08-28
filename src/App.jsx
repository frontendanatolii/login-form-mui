import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { AppBar, Box, IconButton, Link, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';

function App() {
  const [anchor, setAnchor] = useState(null);
  const onClose = () => setAnchor(null);

  return (
    <div className="App">
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' sx={{flexGrow: 1}}>
            My blog Website
          </Typography>
          <Box>
            <IconButton size='large' color='inherit' onClick={(e) => setAnchor(e.currentTarget)}>
              <AccountCircleIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchor}
              keepMounted
              open={!!anchor}
              onClose={onClose}
            >
              <MenuItem onClick={onClose}>Profile</MenuItem>
              <MenuItem onClick={onClose}>My account</MenuItem>
              <MenuItem onClick={onClose}>
                <Link href='/login'>
                  Logout
                </Link>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
        <Routes path='/' element={<Home />}>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
