import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Create extends Component {
  state = {
    first_name: "",
    last_name: "",
    avatar: "",
    submitted: false
  }
  
  componentWillMount(){
    const currentProfile = this.props.location.pathname.slice(0, -5);
    fetch(`https://reqres.in/api${currentProfile}`, {
      method: 'get'
    })
    .then(response => response.json())
    .then(response => {
      const { first_name, last_name, avatar } = response.data;
      this.setState({
        first_name: first_name,
        last_name: last_name,
        avatar: avatar,
      })
    })
    .catch(err => console.log(err));
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  submitUpdates = (e) => {
    e.preventDefault();

    const { id, first_name, last_name, avatar } = this.state;
    fetch(`https://reqres.in/api/users${id}`, {
      method: 'PUT',
      body: { 
        first_name: first_name,  
        last_name: last_name, 
        avatar: avatar
      }
    }).then(response => {
      if (response.status === 200 || response.status === 201){
        this.setState({ submitted: true });
      }
      return response.json()
    })
    .then(response => console.log(response))
    .catch(err => console.log(err));
  }

  render(){
    return(
      <div className="create-form">
      {
        !this.state.submitted ?
        <main className="form-values">
          <h2>Edit Details</h2>
          <form onSubmit={this.submitUpdates}>
            <input 
              required
              name="first_name"
              type="text"
              value={this.state.first_name}
              onChange={this.handleChange}
              placeholder="First name"
            />
            <input 
              required            
              name="last_name"
              type="text"
              onChange={this.handleChange}            
              value={this.state.last_name}
              placeholder="Last name"
            />
            <input 
              required          
              name="avatar"
              type="text"
              onChange={this.handleChange}            
              value={this.state.avatar}
              placeholder="Image URL"
            />

            <section className="two-buttons">
              <Link to="/">
                Cancel
              </Link>

              <button 
                type="submit"
                className="orange-button"
              >
                Update
              </button>
            </section>
          </form>
        </main>
        :
        <div>
          <p>Details updated for:</p>
        
          <p>{this.state.first_name} {this.state.last_name}</p>
          <Link to="/">
            Return
          </Link>
        </div>
      }
      </div>
    );
  };
};