import React, {
  Component
} from "react";

export default class Profile extends Component {
  render() {
    return (
      <div className="profile-page">
        <img 
          className="profile-pic"
          src="https://images2.alphacoders.com/947/thumb-1920-94710.jpg"
        />
        <h1>Sammy Samuelson</h1>

        <h2> ID: 007</h2>
        <div>
          <button>edit</button>
          <button>delete</button>
        </div>
      </div>
    )
  }
}
