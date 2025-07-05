import React, { useState, useEffect } from 'react';
import b1 from './images/about1.jpg'; // Main image
import './About.css'; // Animation and styles

function About() {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      {/* Banner Image with overlay text */}
      <div className="image-text-container">
        <img
          src={b1}
          alt="Rubber Granules"
          className="about-banner-image"
        />
        <div className="overlay-text animate-fade-up">
          <h2 className="about-heading">About Us</h2>
          <p className="about-sub">Trusted for quality and innovation in rubber products.</p>
        </div>
      </div>

      {/* Text Section */}
      <div className="container mulch-container mt-5 animate-fade-up delay-2">
        <h2 style={{ color: '#E53935' }}>About us</h2>
        <p>
          Saraswathi Rubbers located in Kodad, Telangana, India is a renowned name among Rubber Industries.
          At Saraswathi Rubbers, consistent quality of Rubber Crumb and Rubber Granules at various grades of Factice
          are manufactured compliant with all requirements of relevant national standards and tested as per
          prevalent internationally accepted test methods.
        </p>
        <p>
          During these years of journey, Saraswathi Rubbers has recorded continuous growth and has served its customers
          delightfully with quality of product as well as services for wide range of product applications such as
          Automotive & OTR tyres, Conveyor belts, Moulded & Extruded Rubber products on PAN India as well as
          global arena. The Company is led by richly experienced and highly qualified management team well supported
          by adequately qualified and experienced execution team in all business processes.
        </p>
        <p>
          The company operates its processes complying with the requirements of Quality Management System,
          Environment Management System and Health and Safety Management System.
        </p>
      </div>
    </div>
  );
}

export default About;
