import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Landing from './app/views/Landing';

class NonLanding extends Component {
  render() {
    return (
      <div>
        non Landing
        <Link to="/">Landing</Link>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Landing} />
          <Route exact path="/notlanding" component={NonLanding} />
        </Router>
      </div>
    );
  }
}

export default App;
