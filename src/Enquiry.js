import React, { useState, useEffect } from 'react';
import './Enquiry.css';
import b1 from './images/epdmg1.jpg';
import g1 from './images/tw1.webp';
import g2 from './images/crmb1.jpg';
import g3 from './images/crmb2.jpg';

const Enquiry = () => {
    useEffect(() => {
            window.scrollTo(0, 0);
          }, []);
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Sending...');

    const formData = new FormData(e.target);

    try {
      const response = await fetch('http://saraswathirubbers.com/sendmail.php', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.status === 'success') {
        setFormStatus('Message sent successfully!');
        e.target.reset();
      } else {
        setFormStatus('Failed to send message. Try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setFormStatus('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container-fluid py-5">
      <div className="row justify-content-center mb-5">
        <div className="col-md-6 text-center">
          <img src={b1} alt="Top rubber scrap" className="img-fluid" />
        </div>
        <div className="col-md-4 text-center">
          <img src={g1} alt="Rubber Powder" className="img-fluid mb-4" />
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6 mb-5">
          <h3 className="fw-bold mb-4">Enquire us</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Your name</label>
              <input type="text" name="name" className="form-control bg-light border-0" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Your email</label>
              <input type="email" name="email" className="form-control bg-light border-0" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Subject</label>
              <input type="text" name="subject" className="form-control bg-light border-0" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Your message (optional)</label>
              <textarea name="message" rows="5" className="form-control bg-light border-0"></textarea>
            </div>
            <button type="submit" className="btn btn-warning w-100 fw-bold">
              Submit
            </button>
          </form>
          {formStatus && <p className="mt-3 text-center text-success">{formStatus}</p>}
        </div>

        <div className="col-md-4">
          <div className="mb-4">
            <img src={g3} alt="Colored rubber granules" className="img-fluid" />
          </div>
          <div>
            <img src={g2} alt="Rubber path colors" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
