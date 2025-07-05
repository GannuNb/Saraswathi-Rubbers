import React, { useState, useEffect } from 'react';
import image1 from './images/crmain.jpg';
import cr1 from './images/cr1.jpg';
import cr2 from './images/cr2.jpg';
import cr3 from './images/cr3.jpg';
import cr4 from './images/cr4.jpg';
import cr5 from './images/cr5.jpg';
import cr6 from './images/cr6.jpg';
import cr7 from './images/cr7.jpg';
import cr8 from './images/cr8.jpg';

const CrumbRubber = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px 100px 20px',
      fontFamily: 'Arial, sans-serif',
      marginTop: '-4%',
    },
    bannerWrapper: {
      width: '100vw',
      position: 'relative',
      left: '50%',
      right: '50%',
      marginLeft: '-50vw',
      marginRight: '-50vw',
      overflow: 'hidden',
      borderRadius: '0 0 8px 8px',
      boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
      marginBottom: '40px',
    },
    heading: {
      fontSize: '28px',
      fontWeight: 'bold',
      marginTop: '8%',
      color: '#0D47A1',
    },
    contentWrapper: {
      display: 'flex',
      flexDirection: 'row',
      gap: '30px',
      flexWrap: 'wrap',
    },
    text: {
      flex: 2,
      textAlign: 'justify',
      lineHeight: '2.2',
      minWidth: '320px',
      color: '#333',
    },
    imageColumn: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      minWidth: '280px',
    },
    image: {
      width: '100%',
      borderRadius: '8px',
      objectFit: 'cover',
      cursor: 'pointer',
      transition: 'transform 0.3s ease',
    },
    listTitle: {
      fontWeight: 'bold',
      marginTop: '15px',
      color: '#D32F2F',
      fontSize: '1.1rem',
    },
  };

  return (
    <>
      {/* CSS for responsive image */}
      <style>{`
        .banner-img {
          width: 100vw;
          height: 400px;
          display: block;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .banner-img {
            height: 200px;
            object-fit:contain;
          }
        }
      `}</style>

      <div>
        {/* Banner full width */}
        <div style={styles.bannerWrapper}>
          <img src={image1} alt="Crumb Rubber Banner" className="banner-img" />
        </div>

        {/* Main content container */}
        <div style={styles.container}>
          <h2 style={styles.heading}>Crumb Rubber</h2>

          <div style={styles.contentWrapper}>
            <div style={styles.text}>
              <p>
                Crumb rubber is made by reducing scrap tires into small, uniform granules. Inherent reinforcing materials, such as steel and fiber, are removed, along with other types of inert contaminants, such as dust, glass or rock.
              </p>
              <p>
                Saraswathi Rubbers has the nationwide capacity to produce more than 72600 Tonnes of crumb rubber annually for a wide variety of commercial applications.
              </p>

              <p>We use the ambient mechanical grinding method:</p>
              <ul>
                <li>The breaking up of a scrap tire happens at or above normal room temperature.</li>
                <li>Ambient grinding is a multi-step technology and uses whole or pre-treated car or truck tires in the form of shred or chips, or sidewalls or treads.</li>
                <li>Tires are passed through a shredder, breaking the tires into chips.</li>
                <li>Chips are fed into a granulator that breaks them into small pieces while removing steel and fiber in the process.</li>
                <li>Remaining steel is removed magnetically; fiber through shaking screens and wind sifters.</li>
                <li>Finer rubber particles are obtained through further grinding in secondary granulators and high-speed rotary mills.</li>
                <li>Common machines: Secondary granulators, High-speed rotary mills, Extruders or screw presses, Cracker mills.</li>
              </ul>

              <div style={styles.listTitle}>Applications for Crumb Rubber Granules</div>

              <div style={styles.listTitle}>Sport Surfaces</div>
              <ul>
                <li>Kindergarten Playgrounds and Recreation Areas</li>
                <li>School Sports Areas</li>
                <li>Athletic Tracks</li>
                <li>Tennis and Basketball Courts</li>
              </ul>

              <div style={styles.listTitle}>Automotive Industry</div>
              <ul>
                <li>Bumpers</li>
                <li>Splash Guards and Fenders</li>
                <li>Floor Mats for Cars and Trucks</li>
                <li>Floor Liners for Trucks and Vans</li>
              </ul>

              <div style={styles.listTitle}>Construction</div>
              <ul>
                <li>Hospital, Industrial, and Bathroom Flooring</li>
                <li>Floor Tile</li>
                <li>Foundation Waterproofing</li>
                <li>Dam, Silo, and Roof Liners</li>
              </ul>

              <div style={styles.listTitle}>Geotechnical / Asphalt Applications</div>
              <ul>
                <li>Rubberized Asphalt for Roads and Driveways</li>
                <li>Drainage Pipes</li>
                <li>Soil Conditioner</li>
                <li>Porous Irrigation Pipes</li>
                <li>Road Building and Repair</li>
              </ul>

              <div style={styles.listTitle}>Adhesives and Sealants</div>
              <ul>
                <li>Adhesives and Sealing Compounds</li>
                <li>Textured and Non-Slip Paints</li>
                <li>Roof Coating and Waterproofing</li>
              </ul>

              <div style={styles.listTitle}>Shock Absorption and Safety Products</div>
              <ul>
                <li>Shock Absorbing Pads for Rails and Machinery</li>
                <li>Sound Barriers for Highways</li>
                <li>Abrasion Lining in Mining Equipment</li>
              </ul>

              <div style={styles.listTitle}>Rubber and Plastic Products</div>
              <ul>
                <li>Pipe Insulation and Lining</li>
                <li>Garbage Cans</li>
                <li>Shoe Soles and Heels</li>
                <li>Wire and Cable Insulation</li>
              </ul>

              <div style={styles.listTitle}>Crumb rubber powder 30 mesh</div>
              <p>
                We are engaged in manufacturing and supplying the finest quality assortment of 30 Mesh Crumb Rubber. The offered range is widely used in the manufacturing of tyres, flaps, sports grounds, rubber mats and rubber bushes. We process up to 2200 tons per month. Each batch is quality checked by our advanced testing unit.
              </p>

              <div style={styles.listTitle}>Crumb rubber powder 40 mesh</div>
              <p>
                Mesh refers to material that has been sized by passing through a screen with a given number of holes per inch. 40 mesh crumb rubber powder is finer, commonly used in molded/extruded products depending on the application needs.
              </p>

              <div style={styles.listTitle}>Crumb Rubber Granules</div>
              <p>
                Crumb Rubber Granules are recycled rubber produced from automotive and truck scrap tires. During the recycling process, steel and fiber are removed, leaving tire rubber with granular consistency. Further processing through granulators or cracker mills reduces the size. Granules are classified based on size (mesh: 10, 20, 30) and color. Common uses include artificial turf, rubber tiles, and mats.
              </p>
            </div>

            <div style={styles.imageColumn}>
              <img src={cr1} alt="Crumb 1" style={styles.image} />
              <img src={cr2} alt="Crumb 2" style={styles.image} />
              <img src={cr3} alt="Crumb 3" style={styles.image} />
              <img src={cr4} alt="Crumb 4" style={styles.image} />
              <img src={cr5} alt="Crumb 5" style={styles.image} />
              <img src={cr6} alt="Crumb 6" style={styles.image} />
              <img src={cr7} alt="Crumb 7" style={styles.image} />
              <img src={cr8} alt="Crumb 8" style={styles.image} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CrumbRubber;
