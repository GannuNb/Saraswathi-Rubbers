import React, { useState, useEffect } from 'react';
import './TyreWire.css';

import image1 from './images/tw.png'; // Top image
import tyrewire1 from './images/tw1.webp';
import tyrewire2 from './images/tw2.webp';
import tyrewire3 from './images/tyrewire3.jpg';

const TyreWire = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="tyrewire-section">
      {/* Top Image full viewport width */}
      <div className="top-image-wrapper">
        <img src={image1} alt="Top Rubber Granules" className="top-image" />
      </div>

      {/* Container with content - text left, images right */}
      <div className="content-wrapper flex-row">
        <div className="text-content">
          {/* ... same content */}
          <h2>Tyre Wire Scrap</h2>
          <p>
            Tyre Wire Scrap, also known as TDS (Tyre Derived Steel), is a light melting scrap obtained during the shredding process of waste tyres. It primarily consists of steel wires that are embedded within the tyre structure, recovered after the rubber has been separated.
          </p>
          <p>
            The recovery of tyre wire is an essential part of tyre recycling, helping to reduce landfill waste and promote sustainable resource use. This steel scrap is highly valuable as it can be melted down and reused in various steel manufacturing processes.
          </p>
          <h3>Processing and Quality</h3>
          <p>
            The tyre wire scrap is collected through mechanical shredding and separation processes that ensure the removal of rubber and other contaminants. The quality of tyre wire scrap depends on the efficiency of these separation methods, producing steel that is clean and ready for melting.
          </p>
          <h3>Applications</h3>
          <ul>
            <li><strong>Steel Industry:</strong> The recovered steel is melted and reused in the production of new steel products.</li>
            <li><strong>Construction:</strong> Tyre wire can be repurposed as reinforcement in concrete or other construction materials.</li>
            <li><strong>Manufacturing:</strong> Used in producing steel wires, rods, and other components.</li>
            <li><strong>Environmental Benefits:</strong> Recycling tyre wire reduces the need for virgin steel production, saving energy and raw materials.</li>
          </ul>
          <h3>Benefits of Using Tyre Wire Scrap</h3>
          <ul>
            <li>Reduces environmental pollution by minimizing tyre waste in landfills.</li>
            <li>Conserves natural resources by reusing steel content.</li>
            <li>Supports circular economy by turning waste into valuable raw material.</li>
            <li>Contributes to cost savings for steel manufacturers due to recycled input materials.</li>
          </ul>
          <h3>Challenges and Considerations</h3>
          <p>
            While tyre wire scrap is a valuable resource, challenges include ensuring consistent quality, removing residual rubber, and managing contaminants. Advances in recycling technology continue to improve these processes, making tyre wire scrap an increasingly reliable material for reuse.
          </p>
        </div>

        <div className="images-column">
          <img src={tyrewire1} alt="Tyre Wire Scrap 1" />
          <img src={tyrewire2} alt="Tyre Wire Scrap 2" />
          <img src={tyrewire3} alt="Tyre Wire Scrap 3" />
        </div>
      </div>
    </section>
  );
};

export default TyreWire;
