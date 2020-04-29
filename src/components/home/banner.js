import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';

import BannerImage1 from '../../assets/images/hero_right.webp';


const Banner= ()=> {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
        
    const bannerData = [
        {
            img: BannerImage1,
            textLg: 'Get things done with Appco',
            textSm: 'Dorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusm tempor incididunt ulabore et dolore magna aliqua.',
            alt: 'Banner 1'
        },
        {
            img: BannerImage1,
            textLg: 'Get things done with Appco',
            textSm: 'Dorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusm tempor incididunt ulabore et dolore magna aliqua.',
            alt: 'Banner 2'
        },
        {
            img: BannerImage1,
            textLg: 'Get things done with Appco',
            textSm: 'Dorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusm tempor incididunt ulabore et dolore magna aliqua.',
            alt: 'Banner 3'
        },

    ]    

    return(   
        <div className="home__banner">     
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {bannerData.map((bannerData, i) => (
                    <Carousel.Item key={i.toString()}>                       
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className="banner__data">
                                        <h2>{bannerData.textLg}</h2>
                                        <p>{bannerData.textSm}</p>
                                        <button className="banner__button">Download App</button>
                                    </div>
                                </div>
                                <div className="col-md-5 offset-md-1">
                                    <div className="banner__image">
                                        <img className="img-fluid" src={bannerData.img} alt={bannerData.alt}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}            
            </Carousel>
        </div>
    )
}


export default Banner;