/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import { colors, Stack, Typography, Box} from '@mui/material';
import { ContentCopyOutlined, DiamondOutlined } from '@mui/icons-material'

const Features = () => {
  return (
    <>
      <Typography
        variant='h3'
        className='fitHeight fitWidth center'
        sx={{
          color: colors.grey[50],
          pt: 27.5,ml:5
        }}>
        We Create Something New
      </Typography>
      <Typography
        variant='h5'
        className='fitHeight fitWidth center'
        sx={{
          color: colors.grey[200],
          pt: 4,pl: 15,
          width: 600,
          textAlign: 'left',
        }}
      >
        We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily
      </Typography>
      <Stack direction='row'>
        <Typography
          variant='h6'
          letterSpacing={1.5}
          sx={{
            color: colors.grey[300],
            pt: 7.5,ml: 86,
          }}>
          <ContentCopyOutlined />
          <br />
          30 NEW FEATURE PAGES

          <Typography variant='inherit'
            sx={{ textAlign: 'left', width: 350, pt: 4 }}>
            Startup Framework contains components and complex blocks which can easily.
          </Typography>

        </Typography>

        <Typography
          variant='h6'
          letterSpacing={.5}
          sx={{
            color: colors.grey[300],
            pt: 7.5,ml: 10,
          }}>
          <DiamondOutlined />
          <br />
          USEFUL SYMBOL COMPONENTS

          <Typography variant='inherit'
            sx={{ textAlign: 'left', width: 350, pt: 4 }}>
            Samples will show you the feeling on how to play around using the components</Typography>

        </Typography>
          <Box
          className='bg-works-2 box-1'
          sx={{
            width:500,
            height:575,
            backgroundSize:'cover',
            ml:-175,mt:-30,
            borderRadius:5,
            border:'5px solid'+colors.deepPurple[300]+'E0',
            borderTop:'none',borderRight:'none'
          }}>
          </Box>
      </Stack>
    </>
  )
}

export default Features