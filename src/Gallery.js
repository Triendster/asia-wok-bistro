import React, { useState, useEffect } from 'react';
import './Gallery.css';
import slide0 from  './images/slides/0.jpg'
import slide1 from  './images/slides/1.jpg'
import slide2 from  './images/slides/2.jpg'
import slide3 from  './images/slides/3.jpg'
import slide4 from  './images/slides/4.jpg'
import slide5 from  './images/slides/5.jpg'
import useWindowDimensions from './windowDimensions'
import useBodyHeight from './useBodyHeight';
import useScrollPosition from './useScrollPosition'

const pictureSlides = {
    0: slide0,
    1: slide1,
    2: slide2,
    3: slide3,
    4: slide4,
    5: slide5,
}

export function ImageContainer ({rows, cols}) {
    let itRows = [];
    let itCols = [];
    let index = 0;
    for(let i = 0; i < rows; i++){
        itRows.push(i);
    }
    for(let j = 0; j < cols; j++){
        itCols.push(j);
    }
    return(
        <>
        {itRows.map((row) => {
            return (
                <div className={`img-row row${rows}`}>
                    {itCols.map((col => {

                        return (<>
                        <div className={`col${cols}`}>
                            <img className='img-container' src={pictureSlides[index++]} alt='Galerie-Bild' loading='lazy'/>
                        </div>
                        </>);
                    }))}
                </div>
            )
        })}
        </>
    );
}


function Gallery () {
    const { height, width } = useWindowDimensions();
    const bodyHeight = useBodyHeight();
    const scrollPosition = useScrollPosition();
    const [opacity, setOpacity] = useState(0);
    const rows = (width > 1000) ? 2 : ((width > 500) ? 3 : 6);
    const cols = (width > 1000) ? 3 : ((width > 500) ? 2 : 1);

    let getOpacity = () => {
        let scrollMax = bodyHeight*0.45;
        return ((scrollPosition/scrollMax) < 1 ? ((scrollPosition/scrollMax) < 0.4 ? 0 : (scrollPosition/scrollMax)) : 1);
    }

    useEffect(() => {
        setOpacity(getOpacity());
    },[scrollPosition]);

    return (
        <section id='gallery-section' className='gallery-container' style={{filter: `brightness(${opacity*100}%)`}}>
            <ImageContainer rows={rows} cols={cols}>

            </ImageContainer>
            <div id='map' className='gallery-jump'>
                <h1 className='invisible'>{height}</h1>
            </div>
        </section>
    );
}

export default Gallery;