import React from "react";
import shape1 from '../../assets/images/say-shape-left.webp';
import shape2 from '../../assets/images/say-shape-right.webp';

const Contact = () => {
    return(
        <div className="contact">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="headign__main">
                            <h2>Say Hello To The<br/>Collaboration Hub.</h2>
                        </div>
                    </div>
                    <div className="col-md-6 text-right">
                        <a href="/" className="btn card-btn1"><span>Get Started</span></a>
                    </div>
                </div>
            </div>
            <div className="say-shape">
                <img src={shape1} alt="shape" className="say-shape1 rotateme img-fluid"/>
                <img src={shape2} alt="shape" className="say-shape2 img-fluid"/>
            </div>
        </div>
    )
}
export default Contact;