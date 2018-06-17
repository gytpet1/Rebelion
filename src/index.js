import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route'
import axios from 'axios'


import LogsContainer from './components/logs_container'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { request: {
      data : {
        
      }
    }}
  }
  componentDidMount() {      
      axios.post(`https://rebelion.com.es/api/item`, {
          myurl : 'https://rebelion.com.es',
          default : 'https://rebellioncard.com',
          mobile : 'https://rebellionpay.com'
       
      })
      .then((response) => {
        this.setState({request: response})
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
   
    return (
      <Router>
        <div className="App">
        <Route path="/" exact render={() => {
          return(<h1>Rebelion</h1>)
        }}/>
        <Route path="/urls" exact render={() => {
          return( <h1>sup</h1>)
        }}/>
        <Route path="/logs" exact render={() => {
          return(<LogsContainer />)
        }}/>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
