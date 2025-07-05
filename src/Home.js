import React, { useState, useEffect } from 'react';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { FaQuestionCircle, FaPhoneAlt } from 'react-icons/fa';

// Image imports
import homeimg2 from "./images/crmb1.jpg";
import homeimg3 from "./images/scrollimg4.jpg";
import cte from "./images/epdmg1.jpg";
import crumrubberimg from "./images/crmb2.jpg";
import epdmimg from "./images/epdmg1.jpg";
import tyrewireimg from "./images/tw1.webp";

import scrollimg1 from "./images/epdmg1.jpg";
import scrollimg2 from "./images/epdmg2.jpg";
import scrollimg3 from "./images/tw2.webp";
import scrollimg4 from "./images/scrollimg4.jpg";
import scrollimg5 from "./images/scrollimg5.jpg";
import scrollimg6 from "./images/tw1.webp";
import scrollimg7 from "./images/scrollimg1.jpg";
import scrollimg8 from "./images/scrollimg2.jpg";
import scrollimg9 from "./images/scrollimg3.jpg";


function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const scrollToProducts = () => {
    const element = document.getElementById("products-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const openLightbox = (index) => {
    console.log(`Open lightbox at index: ${index}`);
    // TODO: Add lightbox functionality here
  };

  return (
    <div>
      {/* Carousel */}
      <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={homeimg2} className="d-block w-100 carousel-image" alt="Banner 1" />
            <div className="carousel-caption d-none d-md-block">
              <h3 data-aos="fade-up">Welcome to Saraswathi Rubbers</h3>
              <p data-aos="fade-up">Explore our wide range of rubber products</p>
              <button className="btn btn-primary" onClick={scrollToProducts}>Explore</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={cte} className="d-block w-100 carousel-image" alt="Banner 2" />
          </div>
        </div>
        <button className="carousel-control-prev blue-arrow" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next blue-arrow" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* About Section */}
      <div className="about-section container d-md-flex align-items-center my-5" data-aos="fade-right">
        <div className="about-image me-4">
          <img src={homeimg3} className="img-fluid" alt="About" />
        </div>
        <div className="about-text">
          <div className="about-label bg-primary px-3 py-1 mb-2 d-inline-block text-white">About</div>
          <h4 className="fw-bold">Saraswathi Rubbers</h4>
          <p>Saraswathi Rubbers, based in Neredmet, Telangana, is a trusted name in the rubber industry. We supply Crumb Rubber, EPDM Granules, Tyre Wire, and more. We are committed to quality and customer satisfaction.</p>
          <Link to="/about">
            <button className="btn btn-outline-primary">Learn More</button>
          </Link>
        </div>
      </div>

      {/* Products Section */}
      <div className="products-section text-center py-5" id="products-section" data-aos="fade-up">
        <h4 className="fw-bold mb-4">Our Products</h4>
        <div className="container">
          <div className="row g-4">
            {[{
              img: crumrubberimg,
              title: 'CRUMB RUBBER',
              desc: `Crumb rubber is made by reducing scrap tires into small, uniform granules. Reinforcing materials like steel and fiber are removed.`,
              link: '/crumbrubber'
            }, {
              img: epdmimg,
              title: 'EPDM GRANULES',
              desc: `EPDM granules are used in sports fields and playgrounds for their durability and multi-functional design.`,
              link: '/epdm'
            }, {
              img: tyrewireimg,
              title: 'TYRE WIRE',
              desc: `Tyre Wire Scrap (TDS) is a light melting steel scrap from waste tire shredding processes.`,
              link: '/TyreWire'
            }].map((product, index) => (
              <div className="col-md-4" key={index}>
                <div className="card h-100 product-card">
                  <img src={product.img} className="card-img-top product-img" alt={product.title} />
                  <div className="card-body">
                    <h6 className="card-title fw-bold">{product.title}</h6>
                    <p className="card-text">{product.desc}</p>
                    <Link to={product.link} className="btn btn-sm btn-link">Read More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


<div className="enquiry-contact-section">
  <div>
    <h5>Enquiry Us</h5>
    <p>If you have any questions or need more information, please feel free to reach out.</p>
    <Link to="/enquiry">
      <button className="btn">Enquire Now</button>
    </Link>
  </div>
  <div>
    <h5>Contact Us</h5>
    <p>Get in touch with us directly for support, quotes, or any other assistance.</p>
    <Link to="/contact">
      <button className="btn">Contact Now</button>
    </Link>
  </div>
</div>






    </div>
  );
}

export default Home;
