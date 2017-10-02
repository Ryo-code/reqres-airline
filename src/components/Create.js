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
    const currentProfile = this.props.location.pathname;
    console.log("currentProfile: https://reqres.in/api" + currentProfile);
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  submitUser = (e) => {
    e.preventDefault();
    console.log(this.state.first_name);

    fetch('https://reqres.in/api/users', {
      method: 'POST',
      body: { 
        first_name: this.state.first_name,  
        last_name: this.state.last_name, 
        avatar: this.state.avatar
      }
    }).then(response => {
      console.log(response);
      if (response.status === 200 || response.status === 201){
        this.setState({ submitted: true });
      }
      return response.json()
    })
    .then(response => {
      console.log(response)
    })
    .catch(err => console.log(err));
  }

  render(){
    return(
      <div className="create-form">
      {
        !this.state.submitted ?
        <main className="form-values">
          <h2>List a new attendant</h2>
          <form onSubmit={this.submitUser}>
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
                className="green-button"
              >
                Submit
              </button>
            </section>
          </form>
        </main>
        :
        <div>
          <p>Success! New attendant has been listed:</p>
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