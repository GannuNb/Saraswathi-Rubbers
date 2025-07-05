import React, { useState, useEffect } from 'react';
  import image1 from './images/about1.jpg'; // Full-width image with two photos

  function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
      <div className="container mulch-container mt-5">
        {/* Full Width Top Image */}
        <div className="row text-center mb-4">
          <div className="col-12">
            <img src={image1} alt="Rubber Products" className="img-fluid w-100" />
          </div>
        </div>

        {/* Contact Info + Map */}
        <div className="row align-items-start">
          <div className="col-md-6 mb-4">
            <h4>Contact us</h4>

            <p><strong>UNIT ADDRESS:</strong><br />
              242/A, REDLAKUNTA VILLAGE, KODAD MANDAL, SURYAPET DIST,<br />
              TELANGANA 508206, INDIA.
            </p>

            <p><strong>ADMIN ADDRESS:</strong><br />
             #406, 4th Floor, Patel Towers, Above EasyBuy Beside Nagole RTO Office, Nagole Hyderabad, Telangana-500068
            </p>

            <p><strong>Mobile</strong>: +91 8886789356<br />
              <strong>Phone</strong>:+91 4049471616<br />
              <strong>E-mail</strong>: Info@saraswathirubbers.com
            </p>
          </div>

          <div className="col-md-6">
            <div className="ratio ratio-4x3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48887.21595769044!2d79.93382559102537!3d16.994824644756797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3503ad544a2be3%3A0x14d59be0d0be3605!2sSaraswathi%20Rubbers!5e1!3m2!1sen!2sin!4v1748333606620!5m2!1sen!2sin"
                title="Saraswathi Rubbers Location"
                style={{ border: 0, width: '100%', height: '100%' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Contact;
