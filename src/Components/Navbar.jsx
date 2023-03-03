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
        <span className="navbarItem">Home</span>
        <span className="navbarItem">Features</span>
        <span className="navbarItem">Pricing</span>
        <span className="navbarItem">Blog</span>
      </Stack>
      </Typography>
    </div>
    </>
  )
}

export default Navbar