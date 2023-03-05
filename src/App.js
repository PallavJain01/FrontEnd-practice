import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { Button, Typography, Box, colors } from '@mui/material';
// import { ArrowBackIosNew, ArrowForwardIos, Brightness1Outlined, Brightness1, ContentCopyOutlined, DiamondOutlined, PlayArrow } from '@mui/icons-material'
// import { Twitter, Instagram, GitHub, Facebook, LocalPhone, Email, Business, Check, Google, Add, Copyright } from '@mui/icons-material';

import {Content, LandingPage, Navbar, Features, CallToAction, Form, Contact, PricingTable, ShowCase, Team, Testimonial, Footer} from './Components'

const App = () => {
  return (
    <>
    <section className='section' id="LandingPage">
      <Navbar />
      <LandingPage  />
    </section>

    <section className='section' id="Content">
      <Content />
    </section>

    <section className='section' id="Features">
      <Features />
    </section>

    <section className='section' id="PricingTable">
      <PricingTable />
    </section>

    <section className='section' id="CallToAction">
      <CallToAction />
    </section>

    <section className='section' id="Form">
      <Form />
    </section>

    <section className='section' id="Contact">
      <Contact />
    </section>

    <section className='section' id="ShowCase">
      <ShowCase />
    </section>

    <section className='section' id="Team">
      <Team />
    </section>

    <section className='section' id="Testimonial">
      <Testimonial />
    </section>

    <section id="Footer">
      <Footer />
    </section>

    </>
  )
}

export default App