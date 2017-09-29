import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Row from './Row';

export default class Home extends Component {
  state = {
    data: [],
    pages: 0
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
      console.log("response~~~", response);
      this.setState({
        data: response.data,
        pages: response.total_pages
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
    console.log("props>>>>>>", this.props);
    console.log("state>>>>>>", this.state);


    for(let i = 0; i < this.state.pages; i++){
      console.log(`...page ${i + 1}!`)
    }

    //上はJSだけど、下はJSXなんだ。~~~~~~~~~~~
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to ReqRes Airlines</h1>
        </header>
        <input 
          type="text"
          placeholder="Search attendant"
        />
        <button>submit</button>

        <section className="row-list">         
          {
            this.state.data.map(
              person => <Row person={person} key={person.id} />
            )
          }
        </section>

        <div className="pagination-numbers">
          <Link to='/home?page=1'> 1 </Link>
          <Link to='/home?page=2'> 2 </Link>
          <Link to='/home?page=3'> 3 </Link>
          <Link to='/home?page=4'> 4 </Link>
        </div>
        
      </div>
    );
  }
}