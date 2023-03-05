import React from 'react'

import { Button, colors, Stack, Typography } from '@mui/material'
import { PlayArrow } from '@mui/icons-material'

const CallToAction = () => {
  return (
    <>
      <Typography
        variant='h1'
        className='center'
        sx={{
          color: colors.grey[50],
          pt: 15,
          width: 650,
          fontSize: 90
        }}>
        Easy to setup.
        Easy to maintain
      </Typography>
      <Typography
        variant='h4'
        className='center'
        sx={{
          color: colors.grey[50],
          pt: 10,
          width: 750
        }}>
        Bootstrap is a widely-used, sleek, intuitive and powerful front-end framework for faster and easier web development.
      </Typography>
      <Stack direction='row' sx={{ mt: 10, display: 'flex', alignItems: 'center', float: 'left' }} gap={5} className='center'>
        <Button
          variant='contained'
          sx={{
            backgroundColor: '#ff4237',
            width: 50,
            height: 60,
            borderRadius: 100,
            ':hover': {
              backgroundColor: '#ff5040'
            }
          }}
        >
          <PlayArrow />
        </Button>

        <Button
          variant='contained'
          sx={{
            backgroundColor: '#00d8c4',
            width: 200,
            height: 60,
            borderRadius: 100,
            px: 5,
            ':hover': {
              backgroundColor: '#00daca'
            }

          }}>
          Get Started
        </Button>
      </Stack>
    </>
  )
}

export default CallToAction