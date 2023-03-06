import React from 'react';

import { Content, LandingPage, Navbar, Features, CallToAction, Form, PricingTable, ShowCase, Team, Testimonial, Footer } from './Components'

const App = () => {
  return (
    <>
      <section className='section' id="LandingPage">
        <Navbar />
        <LandingPage />
      </section>

      <section className='section' id="Content">
        <Content />
      </section>

      <section className='section' id="Features">
        <Features />
      </section>

      <section className='section' id="Form">
        <Form />
      </section>

      <section className='section' id="CallToAction">
        <CallToAction />
      </section>

      <section className='section' id="PricingTable">
        <PricingTable />
      </section>

      <section className='section' id="Testimonial">
        <Testimonial />
      </section>

      <section className='section' id="ShowCase">
        <ShowCase />
      </section>

      <section className='section' id="Team">
        <Team />
      </section>

      {
        //TODO: signup, login and contact forms
      }

      {/* <section className='section' id="Contact">
      <Contact />
    </section> */}

      <section id="Footer">
        <Footer />
      </section>

    </>
  )
}

export default App