import React, { useState, useEffect } from 'react';
import epdm from './images/epdm.jpg';
import epdm1 from './images/epdm1.jpg';
import epdm2 from './images/epdm2.jpg';
import epdmg1 from './images/epdmg1.jpg';
import epdmg2 from './images/epdmg2.jpg';
import './epdm.css';

const EPDMGranules = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="epdm-section">
      <div className="epdm-top-image">
        <img src={epdmg2} alt="EPDM Granules Top" />
      </div>

      <div className="epdm-main">
        <div className="epdm-text">
          <h2>EPDM Granules</h2>
          <p>
            EPDM colored rubber graanules continue to gain popularity in the establishment of commercial
            and private sports playgrounds enabled by its multifunctional design. EPDM colored rubber
            granules feature a unique construction that combines the use of special polymer compounds and
            various components to deliver a versatile and lasting material. The structure provides an
            aesthetic, durable, and highly resistant to UV material that offers an alternative to sports
            ground floors.
          </p>

          <h3>Benefits of EPDM Colored Rubber Granules</h3>
          <ul>
            <li>Durable, robust, and highly resilient</li>
            <li>Contains zero heavy metals</li>
            <li>Offers excellent playability</li>
            <li>Weather versatility</li>
            <li>Applications of EPDM colored rubber granules</li>
          </ul>

          <p>
            The colored rubber granule comes in a unique design that provides versatility where it finds
            applications in various sectors like rubberized tracks, multi-sports ground floors,
            commercial playground floors, gym floors, rubber mats for schools, kindergartens, theme
            floors, EPDM floorings, polypropylene playgrounds, and rubber floor construction. It allows
            customized flexible design that ensures maximum precision to play their full share in action.
            It's also elastic, resistant to shock, and highly resistant to wear and tear, thus
            withstanding extensive activities.
          </p>
        </div>

        <div className="epdm-images">
          <img src={epdm1} alt="EPDM Granule Sample 1" />
          <img src={epdm2} alt="EPDM Granule Sample 2" />
          <img src={epdmg1} alt="EPDM Granule Sample 3" />
          <img src={epdm} alt="EPDM Granule Sample 4" />
        </div>
      </div>
    </section>
  );
};

export default EPDMGranules;
