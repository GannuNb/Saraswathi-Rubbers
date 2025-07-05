import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar.js';
import Footer from './Footer';
import Home from './Home.js';
import Enquiry from './Enquiry';
import About from './About';
import Contact from './Contact.js';
import CrumbRubber from './CrumbRubber.js';
import Products from './Products.js';
import EPDM from './Epdm.js';
import TyreWire from './TyreWire.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='/enquiry' element={<Enquiry />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/crumbrubber' element={<CrumbRubber />} />
        <Route path='/products' element={<Products />} />
        <Route path='/epdm' element={<EPDM />} />
        <Route path='/tyrewire' element={<TyreWire />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
