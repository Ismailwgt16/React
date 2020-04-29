import React from 'react';

import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
import 'react-owl-carousel2/src/owl.theme.default.css';

import man1 from '../../assets/images/man1.webp';
import man2 from '../../assets/images/man2.webp';
import man3 from '../../assets/images/man3.webp';



const Testimonials = () => {  
    const options = {
        items: 3,
        nav: false,
        rewind: true,
        autoplay: true,
        loop: true,
        dots: true,
        center:true
    }; 
    return (
        <div className="testimonials">

            <div className="container">
                <div className="headign__main text-center">
                    <h2>What Our Customers<br/>Have to Say</h2>
                </div>
                <OwlCarousel options={options} className="owl__testimonials owl-carousel">
                    <div className="test__item">
                        <img src={man1} alt="Client" className="img-fluid"/>
                        <h2>Welcome To The Best Model Winner Contest</h2>
                        <p>Utenim ad minim veniam quisnostrud exercitation ullamcolabor nisiut aliquip ex ea commodo consequat duis aute irure dolor in represse.</p>
                    </div>
                    <div className="test__item">
                        <img src={man2} alt="Client" className="img-fluid"/>
                        <h2>Welcome To The Best Model Winner Contest</h2>
                        <p>Utenim ad minim veniam quisnostrud exercitation ullamcolabor nisiut aliquip ex ea commodo consequat duis aute irure dolor in represse.</p>
                    </div>
                    <div className="test__item">
                        <img src={man3} alt="Client" className="img-fluid"/>
                        <h2>Welcome To The Best Model Winner Contest</h2>
                        <p>Utenim ad minim veniam quisnostrud exercitation ullamcolabor nisiut aliquip ex ea commodo consequat duis aute irure dolor in represse.</p>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    )
}

export default Testimonials;