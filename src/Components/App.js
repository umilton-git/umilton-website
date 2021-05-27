import React, { Component } from "react";
import logo from '../logo.svg';
import '../CSS/App.css';
import CarouselContainer from './CarouselContainer.js';
import SiteHeader from './SiteHeader.js';
import SiteFooter from './SiteFooter.js';
import Projects from './Projects.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  render() {
  return (
    <Router>
    <div className="App">
      <SiteHeader />
      <Switch>
      <Route path="/" exact component={CarouselContainer}/>
      <Route path="/home" component={CarouselContainer}/>
      <Route path="/projects" component={Projects}/>
      </Switch>
      <SiteFooter />
    </div>
    </Router>

  );
}
}

export default App;
