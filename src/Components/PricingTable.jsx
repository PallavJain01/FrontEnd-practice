import React from 'react'
import { Box, Typography, ListItem, List, ListItemIcon } from '@mui/material'
import { DiamondOutlined } from '@mui/icons-material'

import Data from './PricingTablePerks.js'


const PricingTable = () => {
  return (
    <>
      <Box sx={{
        width: 300,
        minHeight: 500,
        position: 'relative',
        backgroundColor: '#306ad960',
        border: '1px solid #FFFFFF',
        borderRadius: 2.5,
        zIndex: 1,
        left: 50,
        top: 50
      }}
        className='fitHeight'>
        <ListItem><Typography variant='h2' className='center'>
          {Data.Price}$
        </Typography></ListItem>
        <hr size='2.5' noshade color='white'></hr>
        <Typography sx={{
          lineHeight: 1.5,
          fontSize: 20,
          ml: 2
        }} >
          <List sx={{ color: '#e0e0e0' }}>
            <ListItem><ListItemIcon><DiamondOutlined /></ListItemIcon>{Data.Perks[1]}</ListItem>
            <ListItem><ListItemIcon><DiamondOutlined /></ListItemIcon>{Data.Perks[2]}</ListItem>
            <ListItem><ListItemIcon><DiamondOutlined /></ListItemIcon>{Data.Perks[3]}</ListItem>
            <ListItem><ListItemIcon><DiamondOutlined /></ListItemIcon>{Data.Perks[4]}</ListItem>
            <ListItem><ListItemIcon><DiamondOutlined /></ListItemIcon>{Data.Perks[5]}</ListItem>

          </List>
        </Typography>
      </Box>
    </>
  )
}

export default PricingTable