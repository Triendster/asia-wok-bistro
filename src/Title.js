import React from 'react';
import './Title.css';
import LandingImage from './images/landing.jpg';
import card from './docs/speisekarte.pdf'

function Title () {
    return (
    <section id='title-section' className='title-container'>
        <div id='title' className='title-container-start'></div>
        <div className="title-container-imgcontainer">
            <img className="title-container-imgcontainer-img" src={LandingImage} alt="Bild von vietnamesischem Gericht" loading='lazy' draggable='false'/>
        </div>
        <div className='title-container-description'>
            <div className='title-container-description-title'>
                ASIA-WOK-BISTRO
            </div>
            <div className='title-container-description-text'>
                Feinheiten der asiatischen Küche
            </div>
            <div className='title-container-description-btncontainer'>
                <a className='title-container-description-btncontainer-ref' href={card} target='_blank' rel='noopener noreferrer'>
                    <p>Speisekarte</p>
                </a>
            </div>
        </div>
        <div id='news' className='title-container-jump'>
        </div>
    </section>
    )
}

export default Title;