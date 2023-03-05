import { colors, Typography } from '@mui/material'
import React from 'react'


const Content = () => {
  return (
    <>
      <Typography sx={{pt:25}}></Typography>
      <Typography
        variant="h5"
        className="center fitWidth fitHeight"
        sx={{
          color: colors.grey[50],
          pt: 5
        }}>FREE SAMPLE
      </Typography>
      <Typography
        variant='h1'
        className="center fitWidth fitHeight"
        sx={{
          color: colors.grey[50],
          pt: 5,
          width: 1225,
        }}
      >
        Powerful Generator and Free Figma Sources
      </Typography>
      <Typography
      variant='h5'
      className='center fitWidth fitHeight'
      sx={{
        color:colors.grey[400],
        pt:5,
        width:950,
      }}
      >
        Startup Framework consists components and complex blocks which can be easily be integrated into almost any design. All the componentas are made in the same style, and can easily be integrated into projects, allowing you to create hundreds of solutions
      </Typography>
    </>
  )
}

export default Content