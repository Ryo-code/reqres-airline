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
    const search = this.props.location.search;
    // console.log("search--->", search)
    fetch(`https://reqres.in/api/users${search}`, {
      method: 'get'
    })
    .then(response => response.json())
    .then(response => {
      console.log("response~~~", response);
      this.setState({
        data: response.data,
        pages: response.total_pages
      })
      console.log("this.state.data ~~>", this.state.data);
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
    // console.log("props>>>>>>", this.props);
    // console.log("state>>>>>>", this.state);


    for(let i = 0; i < this.state.pages; i++){
      console.log(`...page ${i + 1}!`)
    }

    //上はJSだけど、下はJSXなんだ。~~~~~~~~~~~
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to ReqRes Airlines</h1>
        </header>

        <Link to="/users/create">
          <img
            className="icon"
            alt="create"
            src="https://cdn0.iconfinder.com/data/icons/round-ui-icons/512/add_blue.png"
          />
        </Link>

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