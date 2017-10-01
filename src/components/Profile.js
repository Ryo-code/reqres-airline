import React, {
  Component
} from "react";
import { Link } from "react-router-dom";

export default class Profile extends Component {
  state = {
    firstName: "",
    lastName: "",
    avatar: "",
    id: ""
  }

  componentWillMount(){
    const currentProfile = this.props.location.pathname;
    console.log("currentProfile: https://reqres.in/api" + currentProfile);
    fetch(`https://reqres.in/api${currentProfile}`, {
      method: 'get'
    })
    .then(response => response.json())
    .then(response => {
      console.log("response~~~", response);
      const { first_name, last_name, avatar, id } = response.data;
      this.setState({
        firstName: first_name,
        lastName: last_name,
        avatar: avatar,
        id: id
      })
      console.log("profile state", this.state);
    })
  }

  deleteUser = (e) =>{
    e.preventDefault();
    console.log("Clicked!");
    fetch(`https://reqres.in/api/users/${this.state.id}`, {
      method: 'DELETE'
    })
    .then(response => {
      console.log(response)
    })
  }

  render() {
    const { avatar, firstName, lastName, id } = this.state;

    return (
      <div className="profile-page">
        <img 
          alt="profile"
          className="profile-pic"
          src={ avatar }
        />
        <h1> { firstName } { lastName }</h1>

        <h2> ID: { id } </h2>
        <div>
          <Link to={`/users/${id}/edit`}>
            <button className="orange-button">edit</button>
          </Link>
          <button 
            onClick={this.deleteUser}
            className="red-button"
          >
            delete
          </button>
        </div>

        <Link to="/">
          Back
        </Link>
      </div>
    )
  }
}
