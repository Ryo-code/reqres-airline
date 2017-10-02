import React, {
  Component
} from "react";
import { Link } from "react-router-dom";

export default class Profile extends Component {
  state = {
    firstName: "",
    lastName: "",
    avatar: "",
    id: "",
    deleted: false
  }

  componentWillMount(){
    const currentProfile = this.props.location.pathname;
    console.log("currentProfile: https://reqres.in/api" + currentProfile);
    fetch(`https://reqres.in/api${currentProfile}`, {
      method: 'get'
    })
    .then(response => response.json())
    .then(response => {
      const { first_name, last_name, avatar, id } = response.data;
      this.setState({
        firstName: first_name,
        lastName: last_name,
        avatar: avatar,
        id: id
      })
    })
    .catch(err => console.log(err));
  }

  deleteUser = (e) =>{
    e.preventDefault();
    fetch(`https://reqres.in/api/users/${this.state.id}`, {
      method: 'DELETE'
    })
    .then(response => {
      console.log(response);
      this.setState({ deleted: true })
    })
    .catch(err => console.log(err));    
  }

  render() {
    const { avatar, firstName, lastName, id, deleted } = this.state;

    return (
      <div>
        {
        !deleted ?
        <div className="profile-page">
          <img 
            alt="profile"
            className="profile-pic"
            src={avatar}
          />
          <h1> {firstName} {lastName}</h1>

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
        :
        <div className="create-form">
          <p>You have deleted:</p>
          <p>{firstName} {lastName}</p>
          <Link to="/">
            Return
          </Link>
        </div>
        }
      </div>
    )
  }
}
