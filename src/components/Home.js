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
    console.log("search--->", search)
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
    console.log("props>>>>>>", this.props);
    console.log("state>>>>>>", this.state);

    let pageNums = [];
    for(let i = 0; i < this.state.pages; i++){
      pageNums.push(i+1)
    }
    console.log("pageNums is here:", pageNums)

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
                <Link to={`/home?page=${number}`} key={number}>
                {`${number}`}
                </Link>
              )
            })
          }
        </div>
      </div>
    );
  }
}