import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

export default class Create extends Component {
  componentWillMount(){
    const currentProfile = this.props.location.pathname;
    console.log("currentProfile: https://reqres.in/api" + currentProfile);
    console.log("this.props", this.props);
    // console.log("response!", this.response);
  }

  // var payload = {
  //   a: 1,
  //   b: 2
  // };
  // var data = new FormData();
  // data.append( "json", JSON.stringify( payload ) );
  // fetch("/echo/json/",
  // {
  //   method: "POST",
  //   body: data
  // })
  // .then(response => response.json())
  // .then(data => console.log( "data...", JSON.stringify(data)) )

  // fetch('https://reqres.in/api/users', {
  //   method: 'POST',
  //   headers: {'Content-Type':'application/x-www-form-urlencoded'}, // this line is important, if this content-type is not set it wont work
  //   body: `firstName=first_name.value&lastName=last_name.value&avatar=avatar.value`
  // });

  render(){
    return(
      <div className="create-form">
        <h2>Create a new attendant</h2>

        <form>
          <input 
            name="first_name"
            type="text"
            placeholder="First name"
          />
          <input 
            name="last_name"
            type="text"
            placeholder="Last name"
          />
          <input 
            name="avatar"
            type="text"
            placeholder="image URL"
          />

          <section className="two-buttons">
            <Link to="/">
              <Button inverted color='green'>Green</Button>
            
              <Button className="orange-button">
                Cancel
              </Button>
            </Link>

            <button className="green-button">
              Submit
            </button>
          </section>
        </form>
      </div>
    );
  };
};