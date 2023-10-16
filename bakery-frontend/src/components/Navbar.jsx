import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Navbar(){
    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Bakery Application
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default Navbar