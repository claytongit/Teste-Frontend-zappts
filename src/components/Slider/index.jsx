import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './style.css';

export default function Slider(){
    return(
        <Carousel autoPlay showThumbs={false} showArrows={false} infiniteLoop={true} > 
            <div className="containerSlider">
                <img className="imageSlider" alt="" src="../../assets/image.png" />
                <div className="contentSlider">
                    <h1>Marcenas mattis agestas</h1>
                    <p>Erdur et masesuada fames ac ante ileum primer in faucibus uspendisse porta.</p>
                </div>
            </div>
            <div className="containerSlider">
                <img className="imageSlider" alt="" src="../../assets/image.png" />
                <div className="contentSlider">
                    <h1>Marcenas mattis agestas</h1>
                    <p>Erdur et masesuada fames ac ante ileum primer in faucibus uspendisse porta.</p>
                </div>
            </div>
            <div className="containerSlider">
                <img className="imageSlider" alt="" src="../../assets/image.png" />
                <div className="contentSlider">
                    <h1>Marcenas mattis agestas</h1>
                    <p>Erdur et masesuada fames ac ante ileum primer in faucibus uspendisse porta.</p>
                </div>
            </div>
        </Carousel>
    );
}