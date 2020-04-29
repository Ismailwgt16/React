import React from 'react';
import logo from '../../assets/images/logo.webp';

class Footer extends React.Component {
    render(){
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 footer__col">
                            <div className="footer__logo">
                                <img src={logo} alt="brand" className="img-fluid"/>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>
                        </div>
                        <div className="col-md-3 footer__col">
                            <h2>Quick Links</h2>
                            <ul>
                                <li><a href="/">About</a></li>
                                <li><a href="/">Features</a></li>
                                <li><a href="/">Pricing</a></li>
                                <li><a href="/">Download</a></li>
                                <li><a href="/">Reviews</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 footer__col">
                            <h2>Support</h2>
                            <ul>
                                <li><a href="/">Report a bug</a></li>
                                <li><a href="/">Privacy Policy</a></li>
                                <li><a href="/">Terms &amp; Conditions</a></li>
                                <li><a href="/">Sitemap</a></li>
                                <li><a href="/">FAQs</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 footer__col">
                            <h2>Newsletter</h2>
                            <p>Heaven fruitful doesn't over lesser in days. Appear</p>
                            <div className="input-group subscribe__form">
                                <input type="text" className="form-control" placeholder="Email"/>
                                <div className="input-group-append">
                                    <button className="btn card-btn1" type="button"><span>Send</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sub__footer text-center">
                    <p>©Copyright Appco 2020 All rights reserved</p>
                </div>
            </div>
        )
    }
}

export default Footer;