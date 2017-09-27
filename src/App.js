import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Row from './components/Row';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      // requestFailed: false
    };
  }

  componentDidMount(){
    fetch('https://reqres.in/api/users?page=2', {
      method: 'get'
    })
    .then(response => response.json())
    .then(response => {
      console.log("response", response);
      this.setState({
        data: response.data
      })
    })
    .catch((err) => {
      console.log(err);
    });
  }
  
  render() {
    if (!this.state.data) return <p> Loading... </p>

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        
        <input 
          type="text"
          placeholder="Search"
        />
        
        <div className="row-list"> 
          { 
            this.state.data.map((person) => {
              return (
                <Row 
                  firstName={person.first_name} 
                  lastName={person.last_name} 
                  avatar={person.avatar} 
                  key={person.avatar}
                />
              )
            })
            // this.state.data[0].first_name
          }
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
