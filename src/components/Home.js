import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Row from './Row';

export default class Home extends Component {
  state = {
    data: [],
    pages: 0,
    page: 1
  }

  getData = (page = this.state.page) => {
    fetch(`https://reqres.in/api/users?page=${page}`, {
      method: 'get'
    })
    .then(response => response.json())
    .then(response => {
      this.setState({
        data: response.data,
        pages: response.total_pages,
        page: page
      })
    })
    .catch((err) => {
      console.log(err);
    });
  }

  componentDidMount() {
    const search = this.props.location.search;
    const page = search ? search.replace('?page=','') : 1;
    this.getData(+page);
  }

  render() {
    if (!this.state.data.length) return <p> Loading... </p>

    let pageNums = [];
    for(let i = 0; i < this.state.pages; i++){
      pageNums.push(i+1)
    }

    //上はJSだけど、下はJSXなんだ。~~~~~~~~~~~
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to ReqRes Airlines</h1>
        </header>
          
        <Link to="/users/create">
          <button 
            type="submit"
            className="green-button centered"
          >
            New attendant
          </button>
        </Link>

        <section className="row-list">         
          {
            this.state.data.map(
              person => <Row person={person} key={person.id} />
            )
          }
        </section>

        <div className="pagination-numbers">
          {
            pageNums.map((number) => {
              return (
                this.state.page === number ?
                <p key={number}>
                  {number}
                </p>
                :
                <Link 
                  onClick={() => this.getData(number)} 
                  to={`/home?page=${number}`} 
                  key={number}
                >
                  {number}
                </Link>
              )
            })
          }
        </div>
      </div>
    );
  }
}