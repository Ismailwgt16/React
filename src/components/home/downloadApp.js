import React from 'react';

import appStore from '../../assets/images/app_btn1.webp';
import playStore from '../../assets/images/app_btn2.webp';
import downloadImage from '../../assets/images/available-app.webp';

const DowanloadApp = () => {
    return (
        <div className="download__app">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="download__image">
                            <div className="headign__main">
                                <h2>Our App Available<br/> For Any Device<br/> Download now</h2>
                            </div>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fug.</p>
                            <ul className="download__btns">
                                <li>
                                    <a href="/"><img src={appStore} alt="App Store" className="img-fluid"/></a>
                                </li>
                                <li>
                                    <a href="/"><img src={playStore} alt="Play Store" className="img-fluid"/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 offset-md-1">
                        <div className="download__image">
                            <img src={downloadImage} alt="download app" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DowanloadApp; 