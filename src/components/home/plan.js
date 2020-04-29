import React from 'react';
import CardCustom from './cardcustom';


const Plan = () => {
    return (
        <div className="pricePlan">
            <div className="container">
                <div className="headign__main text-center">
                    <h2>Choose Your Very Best <br/>Pricing Plan.</h2>
                </div>
                <div className="row">
                    <CardCustom col="col-md-4 priceCard text-center">
                        <h4>2 Years</h4>
                        <h2>$05 <span>/ month</span></h2>
                        <hr/>
                        <ul>
                            <li>Increase traffic 50%</li>
                            <li>E-mail support</li>
                            <li>10 Free Optimization</li>
                            <li>24/7 support</li>
                        </ul>
                        <div>
                            <a href="/" className="btn card-btn1"><span>Get Started</span></a>
                        </div>
                    </CardCustom>
                    <CardCustom col="col-md-4 priceCard text-center">
                        <h4>2 Years</h4>
                        <h2>$05 <span>/ month</span></h2>
                        <hr/>
                        <ul>
                            <li>Increase traffic 50%</li>
                            <li>E-mail support</li>
                            <li>10 Free Optimization</li>
                            <li>24/7 support</li>
                        </ul>
                        <div>
                            <a href="/" className="btn card-btn1"><span>Get Started</span></a>
                        </div>
                    </CardCustom>
                    <CardCustom col="col-md-4 priceCard text-center">
                        <h4>2 Years</h4>
                        <h2>$05 <span>/ month</span></h2>
                        <hr/>
                        <ul>
                            <li>Increase traffic 50%</li>
                            <li>E-mail support</li>
                            <li>10 Free Optimization</li>
                            <li>24/7 support</li>
                        </ul>
                        <div>
                            <a href="/" className="btn card-btn1"><span>Get Started</span></a>
                        </div>
                    </CardCustom>
                </div>
            </div>
        </div>
    )
}

export default Plan ;