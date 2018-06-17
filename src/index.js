import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route'



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Route path="/" exact render={() => {
          return( <h1>hello</h1>)
        }}/>
        <Route path="/sup" exact render={() => {
          return( <h1>sup</h1>)
        }}/>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
