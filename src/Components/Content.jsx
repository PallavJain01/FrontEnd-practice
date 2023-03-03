import { colors, Typography } from '@mui/material'
import React from 'react'


const Content = () => {
  return (
    <>
    <Typography
    variant="h5"
    className="center fitWidth fitHeight"
    sx={{
      'color':colors.grey[50],
      'paddingTop':5
    }}>FREE SAMPLE
    </Typography>
    </>
  )
}

export default Content