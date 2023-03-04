import React from 'react'

import './index.css'

import { Typography, Stack } from '@mui/material';

const Navbar = () => {
  return (
    <>
    <div id="Navbar"
    className='fitWidth fitHeight center'>
      <Typography variant="h5">
      <Stack
      direction='row'
      spacing={7.5}
      >
        <span className="navbarItem"><a href='#LandingPage'>Home</a></span>
        <span className="navbarItem"><a href='#Features'>Features</a></span>
        <span className="navbarItem"><a href='#PricingTable'>Pricing</a></span>
        <span className="navbarItem"><a href='#Blog'>Blog</a></span>
      </Stack>
      </Typography>
    </div>
    </>
  )
}

export default Navbar