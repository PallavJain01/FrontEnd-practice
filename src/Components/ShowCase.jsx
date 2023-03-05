import React from 'react';

import { Box, Button, colors, List, ListItem, Typography } from '@mui/material'
import { Stack } from '@mui/system'

const WorksTemplate = (props) => {
  return (
  <>
  <Stack direction='column' gap={7.5}>
    <Box
    className={`bg-works-${props.num}`}
    sx={{
      width:450,
      height: 275,
      borderRadius: 2.5
    }}></Box>
    <Typography variant='body1' sx={{mt:-5}}>{props.Line1}</Typography>
    <Typography variant='body1' sx={{mt:-6.5}}>{props.Line2}</Typography>
  </Stack>
  </>
  )
}


const ShowCase = () => {
  return (
    <>
      <List>
        <ListItem><Stack direction='row' gap={125} sx={{ pt: 7.5, float: 'left', display: 'flex' }} className='center'>
          <Typography
            variant='h3'
            sx={{ color: colors.grey[50] }}>
            Our works
          </Typography>

          <Button
            variant='outlined'
            sx={{
              position: 'relative',
              color: colors.grey[50],
              borderColor: colors.deepPurple[400],
              borderRadius: 100,
              height: 'fit-content',
              py: 1, px: 2.5
            }}>
            View all works
          </Button>
        </Stack></ListItem>

        <ListItem><Stack direction='row' gap={5}
          className='center'
          sx={{
            pt: 5,
            display: 'flex',
            float: 'left',
            color: colors.grey[50]
          }}>

          <WorksTemplate num={1} Line1='UI KIT' Line2='Mozart Project' />
          <WorksTemplate num={2} Line1='FRAMEWORK' Line2='Startup Framework 2.0' />

        </Stack></ListItem>
        <ListItem><Stack direction='row' gap={5}
        className='center'
        sx={{
          pt:5,
          display:'flex',
          float:'left',
          color: colors.grey[50]
        }}>
<WorksTemplate num={3} Line1='PHOTOS' Line2='From the Sky' />
          <WorksTemplate num={4} Line1='PICTURES' Line2='Air Forces' />
        </Stack></ListItem>
      </List>
    </>
  )
}

export default ShowCase