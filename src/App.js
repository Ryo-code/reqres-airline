import React from 'react';
import Router from './Router';

export default () => <Router/>; //wrap Router with Provider if you wanna use redux later

// import React, { Component } from 'react';
// import './App.css';
// import List from './components/List';
// import { Link } from 'react-router-dom';
// // import Profile from './components/Profile';
// // import Routes from "./routes";
// import Routes from './Router';


// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//     };
//   }

//   componentDidMount(){
//     fetch('https://reqres.in/api/users?page=2', {
//       method: 'get'
//     })
//     .then(response => response.json())
//     .then(response => {
//       console.log("response", response);
//       this.setState({
//         data: response.data
//       })
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   }

//   render() {
//     if (!this.state.data) return <p> Loading... </p>

//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1>Welcome to ReqRes Airline</h1>
//           <input 
//             type="text"
//             placeholder="Search attendant"
//           />
//           <Link to="/user"><p>go to user profile page</p></Link>
//         </header>

//         <List data={this.state.data}/>

//         <h3>the pagination will go here...</h3>
//       </div>
//     );
//   }
// }

// export default App;
