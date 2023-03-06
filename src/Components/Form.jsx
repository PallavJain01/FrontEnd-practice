import React from 'react'

import { Box, colors, Typography } from '@mui/material'

const SignUp = () => {
  return (
    <>
      
    </>
  )
}

const Form = () => {
  return (
    <>
      <SignUp />  
      <Typography
        variant='h3'
        className='fitHeight'
        sx={{
          color: colors.grey[50],
          pt: 35, pl: 35,
          width: 400,
          fontWeight: 700
        }}>
        We solve digital problems with an outstanding creative flare
      </Typography>

      <Typography
        variant='h6'
        className='fitHeight'
        sx={{
          color: colors.grey[300],
          mt: 5, ml: 35,
          width: 405,
          textAlign: 'justify',
          lineHeight: 1.5
        }}>
        We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.
        <Box
        className='bg-formPage'
        sx={{
          backgroundSize:'cover',
          width:500,
          height:550,
          borderRadius:2.5,
          ml:100,mt:-55,
          border:'5px solid'+colors.deepPurple[300]+'E0',
          borderTop:'none',borderLeft:'none'
        }}>

        </Box>
      </Typography>


    </>
  )
}

export default Form