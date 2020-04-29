import React from 'react';

import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
import 'react-owl-carousel2/src/owl.theme.default.css';


import appscreen from '../../assets/images/App1.webp';
import appscreenOne from '../../assets/images/App2.webp';
import appscreenTwo from '../../assets/images/App3.webp';



const Screenshot = () => {  
    const options = {
        items: 3,
        nav: true,
        rewind: true,
        autoplay: true,
        margin: 30,
        loop: true
    };  
    
    return (
        <div className="app__screenshot">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <div className="screenshot__capt">
                            <h2>Appco Apps <br/>Screenshot</h2>
                            <p>Lorem ipsum dolor sit amet, consecadipiscing elit, sed do eiusmod tempor incididunt ut ore et dolore magna aliqua. Quis ipsum suspendisse gravida. Risus commodo viverra maecenasan lacus vel facilisis.</p>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="screenshot__slider">
                            <OwlCarousel options={options}>
                                <div><img src={appscreen} alt="App Screen" className="img-fluid"/></div>
                                <div><img src={appscreenOne} alt="App Screen" className="img-fluid"/></div>
                                <div><img src={appscreenTwo} alt="App Screen" className="img-fluid"/></div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Screenshot;