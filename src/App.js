import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar';
import SitesContainer from './containers/SitesContainer';
import { Home } from './components/Home';
import { About } from './components/About';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Home} /> {/* <Route exact path="/" render={() => <div><h1>Welcome to World Heritage Site Finder</h1></div>} /> */}
          <Route exact path="/about" component={About} />
          <Route path='/sites' render={routerProps => <SitesContainer {...routerProps} />}/>
           {/* <Route path="/sites" component={SitesContainer} /> */}
        </div>
      </Router>
    );
  }
};

export default App
