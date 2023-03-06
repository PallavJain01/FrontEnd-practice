import React from 'react'

import { Button, colors, Typography } from '@mui/material'

const LandingPage = () => {
  return (
    <>
      <Typography variant="h4"
        sx={{
          color: colors.grey[50],
          fontWeight: 500,
          marginY: 20,
          mx:'auto'
        }}
        className="fitWidth">
        Startup 3</Typography>

      <Typography variant="h1"
        sx={{
          color: colors.grey[50],
          fontWeight: 500,
          marginY: -15
        }}
        className="fitWidth center">
        Forget About Code</Typography>

      <Typography variant="h5"
        sx={{
          color: colors.grey[50],
          fontWeight: 400,
          maxWidth: 750,
          textAlign: 'center',
          marginY: 25
        }}
        className="center">
        Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding.</Typography>

      <Button
        variant='contained'
        className='center'
        sx={{
          backgroundColor: '#482BE7',
          borderRadius: '25px',
          position: 'absolute',
          paddingY: 1.75,
          paddingX: 5,
          marginY: -15,
          ":hover":
          {
            backgroundColor: '#482BF7'
          }

        }}
      >Create an Account</Button>
    </>
  )
}

export default LandingPage