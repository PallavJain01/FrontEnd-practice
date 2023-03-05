import React from 'react'

import { Box, colors, List, ListItem, Stack, Typography } from '@mui/material'

const Feedbacks = {
  "RAYHAN CURRAN": "Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devises with retina display support.",
  "KAYLEY FRAME": "As a business targeting high net worth indivisuals we were looking for a sick, cool and mini-malistic design for out website.",
  "GENE WHITEFIELD": "The most important part of the Startup Framework is the samples.",
  "ALLAN KIM": "I've built my website with Startup Framework just in one day, and it was ready-to-go"
}

const DataTemplate = (props) => {
  return (
    <>
      <Box sx={{
        borderRadius: 2.5,
        border: '1px solid',
        borderColor: colors.deepPurple[700],
        width: 600,
        height: 250
      }}>
        <Stack direction='row' gap={2.5}>
          <Box
            className={`bg-clients-${props.num}`}
            sx={{
              borderRadius: 2.5,
              border: '1px solid',
              borderColor: colors.grey[50],
              width: 80, height: 80, ml: 5, mt: 5
            }}>
          </Box>
          <List>
            <ListItem>
              <Typography variant='body1' sx={{
                color: colors.grey[200],
                width: 310,
                letterSpacing: 0.6,
                lineHeight: 1.5,
                fontSize: 17.5,
                mt: 2.5
              }}>
                {props.msg}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant='body1' sx={{
                color: colors.grey[700],
                width: 'fit-content',
                letterSpacing: 0.75,
                mt: 1
              }}>
                <b>{props.name}</b>
              </Typography>
            </ListItem>
          </List>
        </Stack>
      </Box>
    </>
  )
}

const Testimonial = () => {
  return (
    <>
      <Typography
        variant='h3'
        sx={{
          color: colors.grey[300],
          pt: 15,
          pl: 37.5
        }}>
        Our Happy Clients
      </Typography>
      <List>
        <ListItem><Stack direction='row' gap={5} className='center' sx={{
          display: 'flex',
          float: 'left',
          pt: 10
        }}>
          <DataTemplate num={1} msg={Feedbacks['RAYHAN CURRAN']} name='RAYHAN CURRAN' />
          <DataTemplate num={2} msg={Feedbacks['KAYLEY FRAME']} name='KAYLEY FRAME' />
        </Stack></ListItem>

        <ListItem><Stack direction='row' gap={5} className='center' sx={{
          display: 'flex',
          float: 'left',
          pt: 5
        }}>
          <DataTemplate num={3} msg={Feedbacks['GENE WHITEFIELD']} name='GENE WHITEFIELD' />
          <DataTemplate num={4} msg={Feedbacks['ALLAN KIM']} name='ALLAN KIM' />
        </Stack></ListItem>
      </List>
    </>
  )
}

export default Testimonial