import React from 'react';
import './App.css';


import {Route, HashRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";

class App extends React.Component {
  render(){
    return (

      <HashRouter>
          <Header/>
          <div id="content">
            <Route exact path="/" component={Home} id="home"/>
          </div>
          <Footer/>
      </HashRouter>
    )
  }
}
export default App;



