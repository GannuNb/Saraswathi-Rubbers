import React, { useEffect } from 'react';
import './Products.css';
import image1 from './images/b-1.jpg';
import cr from './images/cr.jpg';
import epdm from './images/epdm.jpg';
import tyrewire from './images/tyrewire.jpg';

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      img: cr,
      title: 'CRUMB RUBBER',
      description: `Crumb rubber is made by reducing scrap tires into small, uniform granules. Inherent
      reinforcing materials, such as steel and fiber, are removed, along with other inert contaminants.`,
    },
    {
      img: epdm,
      title: 'EPDM GRANULES',
      description: `EPDM colored rubber granules are widely used in sports and playground surfaces. They offer flexibility, durability, and weather resistance.`,
    },
    {
      img: tyrewire,
      title: 'TYRE WIRE',
      description: `Tyre Wire Scrap (TDS) is a light melting scrap derived during the shredding process of waste tyres. It contains minimal rubber or contaminants.`,
    },
  ];

  return (
    <div className="products-page">
      {/* Top Banner */}
      <div className="top-banner">
        <img src={image1} alt="Top Banner" className="top-banner-img" />
      </div>

      {/* Section Heading */}
      <div className="section-heading">
        <h2>Our Products</h2>
        <p>We provide high-quality materials used in sports surfaces, infrastructure, and recycling industries.</p>
      </div>

      {/* Product Cards */}
      <div className="products-container">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.img} alt={product.title} className="product-img" />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <a href="#">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
