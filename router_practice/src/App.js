import React, { Component } from 'react'
import Header from "./Header";
import Home from "./Home";
import Directory from "./Directory";
import {Switch, Route} from "react-router-dom";
import Profile from "./Profile";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Directory" component={Directory} />
          <Route path="/Directory/:id" component={Profile} />
        </Switch>
     
      </div>
    )
  }
}

export default App;
