import React, { Component } from 'react';

import Layout from './components/Layout';
import Header from './components/Header';
// import Offer from './components/Offer';
import Hero from './components/Hero';
import Advantages from './components/Advantages';
import VideoLibrary from './components/VideoLib';
import Features from './components/Features';
import Partner from './components/Partner';
import TechsPromo from './components/TechsPromo';
// import Plans from './components/Plans';
import Testimonials from './components/Testimonials';
import Map from './components/Map';
import Footer from './components/Footer';

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <Header/>
          {/* <Offer/> */}
          <Hero/>
          <Advantages/>
          <VideoLibrary/>
          <Features/>
          <Partner/>
          <Testimonials/>
          <Map/>
          {/* <Plans/> */}
          <TechsPromo/>
          <Footer/>
        </Layout>
      </div>
    );
  }
}

export default App;
