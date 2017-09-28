import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Row from './Row';

export default class Home extends Component {
  state = {
    data: []
  }

  getData = () => {
    // const pageNum = Router.get('params').page;
    const search = this.props.location.search;
    const pageNum = search.replace('?page=','');
    // const pageNum = 3;
    fetch(`https://reqres.in/api/users?page=${pageNum}`, {
      method: 'get'
    })
    .then(response => response.json())
    .then(response => {
      console.log("response", response);
      this.setState({
        data: response.data
      })
      console.log(this.state.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  componentWillReceiveProps() {
    this.getData();
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    if (!this.state.data) return <p> Loading... </p>
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to ReqRes Airlines</h1>
          <input 
            type="text"
            placeholder="Search attendant"
          />
        </header>

        <section className="row-list">         
          {
            this.state.data.map(
              person => <Row person={person} key={person.id} />
            )
          }
        </section>
        <h3>the pagination will go here...</h3>

        <div>
          <Link to='/home?page=1'> 1 </Link>
          <Link to='/home?page=2'> 2 </Link>
          <Link to='/home?page=3'> 3 </Link>
          <Link to='/home?page=4'> 4 </Link>
        </div>
        
      </div>
    );
  }
}