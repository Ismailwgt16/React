import React, { Component } from "react";

import Banner from './banner';
import Features from './features';
import Help from './help';
import DownloadApp from './downloadApp';
import Screenshot from "./screenshot";
import Plan from "./plan";
import Testimonials from "./testimonials";
import Contact from "./contact";

class Home extends Component {
  render() {   

      return (
        <div>
          <Banner id="banner"/>
          <Features id="features"/>
          <Help id="help"/>
          <Screenshot id="screenshot"/>
          <Plan id="plan"/>
          <Testimonials id="testimonials"/>
          <DownloadApp id="downloadApp" />
          <Contact id="contact"/>
        </div>
      );
  }

}

export default Home;




