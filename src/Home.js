import React, { Component } from "react";
import ReactDOM from 'react-dom';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 'Initial Data'
    }

    this.updateState = this.updateState.bind(this); 
    this.clearState = this.clearState.bind(this);
      
  }
  updateState(e){
    this.setState({data:e.target.value})
  }
 

  clearState(){
    this.setState({data:''})
    ReactDOM.findDOMNode(this.refs.myInput).focus();
  }


  render() {
      return (
        <div>
          <h2>Home</h2>
          <input type="text" value={this.state.data} onChange={this.updateState} ref="myInput" />
          <button type="button" onClick = {this.clearState}>Click</button>
          <p>{this.state.data}</p>
        </div>
      );
  }

}

export default Home;