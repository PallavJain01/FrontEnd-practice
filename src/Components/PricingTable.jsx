import React from 'react'
import {Stack } from '@mui/material'

import {Table} from './PricingTableTemplate.js'

const PricingTable = () => {
  return (
    <>
      <Stack direction='row' gap={15} className='center'>
        <Table price={9.99} />
        <Table price={14.99} />
        <Table price={19.99} />
      </Stack>
    </>
  )
}

export default PricingTable