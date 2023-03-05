import React from 'react'

import { colors, Stack, Typography } from '@mui/material'
import { Add, Facebook, Google, Twitter } from '@mui/icons-material'

const Footer = () => {
  return (
    <>
      <Stack direction='row' sx={{ mx: 15, mt: 5 }}>
        <Typography variant='h4' sx={{
          color: colors.grey[50],
        }}>
          Startup 3
        </Typography>
        <Stack direction='row' gap={3} sx={{
          color: colors.grey[400],
          ml: 142,
          fontSize: 17.5,
          fontFamily: 'sans-serif'
        }}>
          <a href='#PrivacyPolicy'>Privacy Policy</a>
          <a href='#Terms'>Terms</a>
          <Twitter className='hover-cursor-pointer' />
          <Facebook className='hover-cursor-pointer' />
          <Google className='hover-cursor-pointer' />
          <Add sx={{ml:-3.5}} />
        </Stack>
      </Stack>
      <br />
      <hr width={'87%'} color={colors.deepPurple[500]} />
      <br />
      <br />
      <Stack direction='row' gap={3} sx={{
        color:colors.grey[400],
        ml:15,
        fontSize:17.5,
        fontFamily: 'sans-serif',
      }}>
        <a href='#Tour'>Tour</a>
        <a href='#Features'>Features</a>
        <a href='#PricingTable'>Pricing Plans</a>
        <a href='#ShowCase'>Our works</a>
        <a href='#Brands'>Brands</a>
        <a href='#Contacts'>Contacts</a>
        <span style={{marginLeft:'52%'}}>&copy;Copyright Startup 3</span>
      </Stack>
    </>
  )
}

export default Footer