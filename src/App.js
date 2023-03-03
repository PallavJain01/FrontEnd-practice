import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { Button, Typography, Box, colors } from '@mui/material';
// import { ArrowBackIosNew, ArrowForwardIos, Brightness1Outlined, Brightness1, ContentCopyOutlined, DiamondOutlined, PlayArrow } from '@mui/icons-material'
// import { Twitter, Instagram, GitHub, Facebook, LocalPhone, Email, Business, Check, Google, Add, Copyright } from '@mui/icons-material';

import {Content, LandingPage, Navbar, PricingTable} from './Components'

const App = () => {
  return (
    <>
    <section id="LandingPage">
      <Navbar />
      <LandingPage  />
    </section>
    <section id="Content">
      <Content />
    </section>
    <section id="PricingTable">
      <PricingTable />
    </section>
    </>
  )
}

export default App