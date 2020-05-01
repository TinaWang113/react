import React, { Component } from 'react';
import './App.css';
import Lifecycle from "./Lifecycle";

class App extends Component {
  constructor(){
    super();
    this.state = {
      showLifecycleCompoment: true
    }
  }

  handleToggleShowLifecycleComponent = () =>{
    this.setState({
      showLifecycleCompoment: !this.state.showLifecycleCompoment
    });
  };

  render(){
    return (
      <div className="App">
        <h1>This is our new react project</h1>
        <button onClick={this.handleToggleShowLifecycleComponent}>
          {" "}
          Click this button to hide or show the lifecycle component
        </button>
        {this.state.showLifecycleCompoment ? <Lifecycle /> : <div> </div>} 
      </div>
    );
  }
 
}

export default App;
