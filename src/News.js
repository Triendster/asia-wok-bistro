import React from 'react';
import './News.css';
import CurrentPicture from './images/corndog.jpg'
import card from './docs/speisekarte.pdf'
import useWindowDimensions from './windowDimensions'

function News () {
    const { height, width } = useWindowDimensions();
    return (
        <section id='news-section' className='news-container'>
            <div className='news-container-title'>
                <h1>beliebtes koreanisches streetfood</h1>
            </div>
            <div className='news-container-imgcontainer'>
                <img className='news-container-img' src={CurrentPicture} alt='Bild von koreanischem Corndog' loading='lazy'>
                </img>
                <div className='news-container-imginfo'>
                    <h2 className={(width < 1000 && width > height) ? 'diagonal' : ''}>Koreanische Corndogs</h2>
                    <p className={(width < 1000 && width > height) ? 'diagonal' : ''}>Probieren Sie jetzt eines der populärsten Gerichte Südkoreas!</p>
                    <div className={(width < 1000 && width > height) ? 'news-container-imginfo-btncontainer diagonal' : 'news-container-imginfo-btncontainer'}>
                        <a href={card} target='_blank' rel='noopener noreferrer'>
                            <span>Speisekarte</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className='news-container-info'>
                <h2 className={(width < 1000 && width > height) ? 'diagonal' : ''}>Jedes Gericht mit Liebe zubereitet</h2>
                <p className={(width < 1000 && width > height) ? 'diagonal' : ''}>
                    Wir sehen uns in einer langen Linie von Köchen.
                    <br/>
                    Von Generation zu Generation werden unsere Gerichte in der Familie weitergereicht.
                    <br/>
                    Bei der Zubereitung achten wir auf die Auswahl handerlesener Zutaten
                    <br/>
                    aus dem Bereich Jena und Umgebung.
                </p>
            </div>
            <div id='galerie' className='news-container-jump'>

            </div>
        </section>
    );
}

export default News;