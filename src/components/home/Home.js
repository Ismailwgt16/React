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
          <Banner/>
          <Features/>
          <Help/>
          <Screenshot/>
          <Plan/>
          <Testimonials/>
          <DownloadApp/>
          <Contact/>
        </div>
      );
  }

}

export default Home;




