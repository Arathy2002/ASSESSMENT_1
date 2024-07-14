import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary" >
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            MY BLOG
          </Typography>
          <Button variant="contained"color="secondary">
                <Link to='/' style={{textDecoration:'none', color:'white'}}>Home</Link>
          </Button>&nbsp;&nbsp;
          <Button variant="contained"  color="secondary">
                <Link to='/addblog' style={{textDecoration:'none', color:'white'}}>Add Blog</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
