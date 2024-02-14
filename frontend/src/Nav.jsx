import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { Style } from '@mui/icons-material';


import './Nav.css'

const pages = ['Home', 'Courses','About Us', 'Online fees payment'];
const settings = [<Link to={'/profile'}>Profile</Link>,'Dashboard', <Link to={'/'}>Logout</Link>];
  
function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    
    <AppBar position="static" sx={{backgroundColor:'lightgrey'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
          className='ti'
            variant="h5"
            noWrap
            component="a"
            href="/Home"
            sx={{
              mr: 58,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Ysabeau SC, sans-serif',
              fontWeight: 900,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SPD YOGA ACADEMY
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="right">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           SPD University
          </Typography> */}
          <Link style={{textDecoration:'none',color:"white"}} to="/Home">
          <Typography
          className=''
            variant="h9"
            noWrap
            component="a"
            
            sx={{
              mr: 5,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 900,
              letterSpacing: ' ',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
            Home
          </Typography>
          </Link>
         
         <Link style={{textDecoration:'none',color:"white"}} to="/Online">
          <Typography
          className=''
            variant="h9"
            noWrap
            component="a"
            
            sx={{
              mr: 5,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 900,
              letterSpacing: ' ',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
            Yoga Online
          </Typography>
          </Link>
          <Link style={{textDecoration:'none',color:"white"}} to="/Courses">
          <Typography
          className=''
            variant="h9"
            noWrap
            component="a"
            sx={{
              mr: 5,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 900,
              letterSpacing: '  ',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           Traning Centers
          </Typography>
          </Link>
          <Link style={{textDecoration:'none',color:"white"}} to="/Courses">
          <Typography
          className=''
            variant="h9"
            noWrap
            component="a"
            sx={{
              mr: 5,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 900,
              letterSpacing: '  ',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           Yoga Trainer
          </Typography>
          </Link>
          <Link style={{textDecoration:'none',color:"white"}} to="/AboutUs">
          <Typography
          className=''
            variant="h9"
            noWrap
            component="a"
            
            sx={{
              mr: 5,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 900,
              letterSpacing: '  ',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            About Us
          </Typography>
          </Link>

         
      

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Profile">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp"  />
              </IconButton>
            </Tooltip>  
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="right">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>

      </Container>
      
      

  
        {/* <img src='https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D'></img> */}
        
      
    </AppBar>
    
     );
   }
   export default Nav;