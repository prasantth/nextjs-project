import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState, useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import { useRouter } from 'next/router';

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { toggleTheme } = useContext(ThemeContext);
  const router = useRouter();
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    router.push('/');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <div style={{ flexGrow: 1 }}>Dashboard</div>
        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>
        <IconButton color="inherit" onClick={handleMenu}>
          <SettingsIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Edit Profile</MenuItem>
          <MenuItem
            onClick={() => {
              toggleTheme();
              handleClose();
            }}
          >
            Change Theme
          </MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
