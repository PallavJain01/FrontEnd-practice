import React from "react";

import { Box, List, ListItem, ListItemIcon, Typography } from "@mui/material";
import { DiamondOutlined } from '@mui/icons-material'

export const Data = {
  "Price": 14.99,
  "Perks": {
    1: "Perk 1",
    2: "Perk 2",
    3: "Perk 3",
    4: "Perk 4",
    5: "Perk 5"
  }
}

export const Table = (props) => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: '#306ad960',
          borderRadius: 5,
          border: '2px solid white',
          width: 350,
          minHeight: 600
        }}>
        <Typography variant='h2' className='center' color='darkblue'>${props.price}</Typography>
        <hr color='white' size={2} />
        <List sx={{ ml: 1.5 }}>
          <Typography sx={{
            lineHeight: 1.5,
            fontSize: 20,
            ml: 1.5,
            color: '#FFF'
          }}>
            <ListItem><ListItemIcon><DiamondOutlined /></ListItemIcon>{Data.Perks[1]}</ListItem>
            <ListItem><ListItemIcon><DiamondOutlined /></ListItemIcon>{Data.Perks[2]}</ListItem>
            <ListItem><ListItemIcon><DiamondOutlined /></ListItemIcon>{Data.Perks[3]}</ListItem>
            <ListItem><ListItemIcon><DiamondOutlined /></ListItemIcon>{Data.Perks[4]}</ListItem>
            <ListItem><ListItemIcon><DiamondOutlined /></ListItemIcon>{Data.Perks[5]}</ListItem>
          </Typography>
        </List>
      </Box>
    </>
  )
}
