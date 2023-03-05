import React from 'react'

import { Box, colors, Container, List, ListItem, Stack, Typography } from '@mui/material'
import { Twitter, Instagram, GitHub, Facebook } from '@mui/icons-material';

const Profile = (props) => {
  return (
    <>
      <Container>
        <Box
          className={`bg-team-${props.num}`}
          sx={{
            height: 100,
            width: 100,
            borderRadius: 100,
            mt: 5,
          }}></Box>
        <Typography
          variant='h5'
          className='fitWidth'
          sx={{
            color: colors.grey[50], pt: 1
          }}
        >
          {props.name}
        </Typography>
        <Typography
          variant='h6'
          className='fitWidth'
          sx={{
            color: colors.grey[400], pt: 1, width: 195
          }}
        >
          {props.work}
        </Typography>
        <Typography sx={{ color: '#FFFFFF', pt: 1 }}>
          <Stack direction='row' gap={2.5}>
            <Twitter className='hover-cursor-pointer' sx={{ visibility: props.Twitter }} />
            <Instagram className='hover-cursor-pointer' sx={{ visibility: props.Instagram }} />
            <Facebook className='hover-cursor-pointer' sx={{ visibility: props.Facebook }} />
            <GitHub className='hover-cursor-pointer' sx={{ visibility: props.GitHub }} />
          </Stack>
        </Typography>
      </Container>
    </>
  )
}

const Team = () => {
  return (
    <>
      <Typography
        variant='h3'
        sx={{
          color: colors.grey[50],
          pt: 15,
          ml: 15
        }}>
        Startup Crew
      </Typography>
      <Typography
        variant='h5'
        sx={{
          color: colors.grey[100],
          pt: 5,
          ml: 15,
          width: 825,
          letterSpacing: 1
        }}>
        The most important part of the Startup Framework is the samples. The samples form a set of 25 usable pages you can use as is or you can add new blocks from the UI kit.
      </Typography>

      <List sx={{ ml: 10 }} >
        <ListItem><Stack direction='row' gap={10}>

          <Profile num={1} name='Leah Salomon' work='UI Designer' GitHub='hidden' />
          <Profile num={2} name='Colin Timmons' work='UX Designer' Facebook='hidden' GitHub='hidden' />
          <Profile num={3} name='Miguel Osborne' work='Front-end Developer' />

        </Stack></ListItem>

        <ListItem><Stack direction='row' gap={10}>

          <Profile num={4} name='Taylor Simon' work='Product Manager' Facebook='hidden' GitHub='hidden' />
          <Profile num={5} name='Steven MacAlister' work='Copyrighter' Instagram='hidden' Facebook='hidden' GitHub='hidden' />

        </Stack></ListItem>
      </List>

    </>
  )
}

export default Team;
