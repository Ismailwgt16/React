import React from 'react';
import './App.css';
import {Route, HashRouter} from "react-router-dom";


import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

class App extends React.Component {
  render(){
    return (
      <HashRouter>
        <div>
          <Header/>
          <div id="content">
            <Route exact path="/" component={Home}/>
            <Route path="/About" component={About}/>
            <Route path="/Contact" component={Contact}/>
          </div>
          <Footer/>
        </div>
      </HashRouter>
    )
  }
}
export default App;



