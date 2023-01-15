import React from 'react'
import './MapFrame.css'


// const address = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2517.1400694057907!2d11.60606861574715!3d50.88411787953752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a6aec549107877%3A0xe0ef55ea198e991e!2sAsia-Wok-Bistro!5e0!3m2!1sde!2sde!4v1663935723518!5m2!1sde!2sde"

function MapFrame () {
  return(
    <section id='map-section'className='mapframe-container'>
      <div className='mapframe-container-content'>
        <div className='mapframe-content-header'>
          <h1>Besuchen Sie uns vor Ort</h1>
        </div>
        <div className='mapframe-content-map'>
          {/* <iframe title='Asia-Wok-Bistro Karte' src={address} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/> */}
        </div>
        <div className='mapframe-content-contacts'>
          <div className='mapframe-contacs-content'>
            <h2>
              Adresse
            </h2>
            <p>
              Asia-Wok-Bistro
              <br/>
              Karl-Marx-Allee 20
              <br/>
              07747 Jena
            </p>
          </div>
          <div className='mapframe-contacs-content'>
            <h2>
              Kontakt
            </h2>
            <p>
              Telefon: 03641 815 99 95
            </p>
          </div>
          <div className='mapframe-contacs-content'>
            <h2>
              Öffnungszeiten
            </h2>
            <p>
              Werktags: 10:30 Uhr - 20:00 Uhr
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapFrame;
