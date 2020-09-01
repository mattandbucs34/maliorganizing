import React from 'react';
import './Main.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BeforeAfter from './pages/BeforeAfter';
import Landing from './pages/Landing';
import Services from './pages/Services';
import Testimonials from './pages/Testemonials';
import Contact from './pages/Contact';
import About from './pages/About';
import FAQ from './components/FAQ';

function Main() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/"><Landing /></Route>
      <Route path="/before-after"><BeforeAfter /></Route>
      <Route path="/services"><Services /></Route>
      <Route path="/testimonials"><Testimonials /></Route>
      <Route path="/contact"><Contact /></Route>
      <Route path="/about"><About /></Route>
      <Route path="/faq"><FAQ /></Route>
      <Footer />
    </BrowserRouter>
  );
}

export default Main;
