import React from 'react'

import { colors, Stack, Typography } from '@mui/material'

import { Professional, Starter, Team } from './PricingTableContents'

const PricingTable = () => {
  return (
    <>
      <Typography
        variant='h3'
        className='center'
        sx={{
          color: colors.grey[50],
          pt: 5
        }}
      >
        Plans &amp; Pricing
      </Typography>
      <Typography
        variant='h5'
        className='center'
        sx={{
          color: colors.grey[200],
          pt: 2,
          width: 600
        }}>
        Startup ramework is free forever - you only pay for custom domain hosting or to export your site.
      </Typography>

      <Stack
        direction='row'
        className='center'
        sx={{
          pt: 4,
          display: 'flex',
          float: 'left',
          gap: 5,
        }}>
        <Starter />
        <Professional />
        <Team />
      </Stack>
    </>
  )
}

export default PricingTable