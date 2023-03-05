import React from "react";

import { colors, Typography, ListItem, ListItemIcon, Box, List, Button } from '@mui/material'
import { Check } from '@mui/icons-material'

const Tick = () => {
  return (
    <ListItemIcon><Check sx={{ color: '#AAFFAA' }} /></ListItemIcon>
  )
}
const EmptyIcon = () => {
  return (
    <ListItemIcon></ListItemIcon>
  )
}

const PricingButton = (props) => {
  return (
    <>
      <Button
        variant='outlined'
        className='center'
        sx={{
          borderColor: colors.grey[500],
          borderRadius: 10,
          mt: 1, px: 7.5, py: 2,
          backgroundColor: props.bgNormal,
          color: colors.grey[50],
          fontSize: 20,
          ':hover': {
            borderColor: '#fafafaff',
            backgroundColor: props.bgHover
          }
        }}
      >Get Started</Button>
    </>
  )
}

export const Starter = () => {
  return (
    <>
      <Box
        sx={{
          border: '1px solid #FFFFFFA0',
          borderRadius: 3,
          width: 500,
          height: 750,
        }}>
        <Typography variant='h5' sx={{
          color: colors.grey[100],
          mt: 3, ml: 10,
          textAlign: 'left'
        }}>
          Starter
        </Typography>

        <Typography variant='h1' sx={{
          color: colors.grey[50],
          ml: 10,
          textAlign: 'left'
        }}>
          9.99
          <sup style={{ fontSize: 40 }}> $</sup>
        </Typography>

        <Typography variant='h6' sx={{ color: colors.grey[100], textAlign: 'left' }}>
          <Typography variant='h6' sx={{ color: colors.grey[100] }}>
            <List sx={{ lineHeight: 1.5 }} >

              <ListItem><Tick />2 GB of space</ListItem>
              <ListItem><Tick />14 days of backups</ListItem>
              <ListItem><Tick />Social integrations</ListItem>
              <ListItem><Tick />Client billing</ListItem>
            </List>
          </Typography>

          <Typography variant='h6' sx={{ color: colors.grey[400], mt: -2 }}>
            <List sx={{ lineHeight: 1.5 }} >
              <ListItem><EmptyIcon />Remote access</ListItem>
              <ListItem><EmptyIcon />Custom Domain</ListItem>
              <ListItem><EmptyIcon />24 hours support</ListItem>
              <ListItem><EmptyIcon />Admin Tools</ListItem>
              <ListItem><EmptyIcon />Collaboration Tools</ListItem>
              <ListItem><EmptyIcon />User Management</ListItem>
            </List>
          </Typography>
          <PricingButton bgNormal='none' bgHover='none' />
        </Typography>
      </Box>
    </>
  )
}

export const Professional = () => {
  return (
    <>
      <Box
        sx={{
          border: '1px solid #FFFFFFA0',
          borderRadius: 3,
          width: 500,
          height: 750,
        }}>
        <Typography variant='h5' sx={{
          color: colors.grey[100],
          mt: 3, ml: 10,
          textAlign: 'left'
        }}>
          Professional
        </Typography>

        <Typography variant='h1' sx={{
          color: colors.grey[50],
          ml: 9,
          textAlign: 'left'
        }}>
          19.99
          <sup style={{ fontSize: 40 }}> $</sup>
        </Typography>

        <Typography variant='h6' sx={{ color: colors.grey[100], textAlign: 'left' }}>
          <Typography variant='h6' sx={{ color: colors.grey[100] }}>
            <List sx={{ lineHeight: 1.5 }} >

              <ListItem><Tick />2 GB of space</ListItem>
              <ListItem><Tick />14 days of backups</ListItem>
              <ListItem><Tick />Social integrations</ListItem>
              <ListItem><Tick />Client billing</ListItem>
              <ListItem><Tick />Remote access</ListItem>
              <ListItem><Tick />Custom Domain</ListItem>
              <ListItem><Tick />24 hours support</ListItem>
            </List>
          </Typography>

          <Typography variant='h6' sx={{ color: colors.grey[400], mt: -2 }}>
            <List sx={{ lineHeight: 1.5 }} >
              <ListItem><EmptyIcon />Admin Tools</ListItem>
              <ListItem><EmptyIcon />Collaboration Tools</ListItem>
              <ListItem><EmptyIcon />User Management</ListItem>
            </List>
          </Typography>
          <PricingButton bgNormal='#FF0055' bgHover='#EE00AA' />
        </Typography>
      </Box>
    </>
  )
}

export const Team = () => {
  return (
    <>
      <Box
        sx={{
          border: '1px solid #FFFFFFA0',
          borderRadius: 3,
          width: 500,
          height: 750,
        }}>
        <Typography variant='h5' sx={{
          color: colors.grey[100],
          mt: 3, ml: 10,
          textAlign: 'left'
        }}>
          Team
        </Typography>

        <Typography variant='h1' sx={{
          color: colors.grey[50],
          ml: 10,
          textAlign: 'left'
        }}>
          49.99
          <sup style={{ fontSize: 40 }}> $</sup>
        </Typography>

        <Typography
          variant='h6'
          sx={{ color: colors.grey[100], textAlign: 'left' }}
        >
          <Typography variant='h6' sx={{ color: colors.grey[100] }}>
            <List sx={{ lineHeight: 1.5 }} >

              <ListItem><Tick />2 GB of space</ListItem>
              <ListItem><Tick />14 days of backups</ListItem>
              <ListItem><Tick />Social integrations</ListItem>
              <ListItem><Tick />Client billing</ListItem>
              <ListItem><Tick />Remote access</ListItem>
              <ListItem><Tick />Custom Domain</ListItem>
              <ListItem><Tick />24 hours support</ListItem>
              <ListItem><Tick />Admin Tools</ListItem>
              <ListItem><Tick />Collaboration Tools</ListItem>
              <ListItem><Tick />User Management</ListItem>
            </List>
          </Typography>
          <PricingButton bgNormal='none' bgHover='none' />
        </Typography>
      </Box>
    </>
  )
}
