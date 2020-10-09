import React, { Component, useEffect, useState } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import './App.css';
import Employee from './components/Employee.js'
import ResultList from './components/ResultList';
import API from './utils/API'

function App() {
  const [users, setUsers] = useState([]);
  // When the component mounts, a call will be made to get random users.
  useEffect(() => {
    loadUsers();
  }, []);

  function loadUsers() {
    API.fetchUsers().then(res => {
      const results = res.data.results;
      let users = results.map(user => {
        console.log(user.login.username)
        return {
          login: user.login.username,
          name: user.name.first,
          image: user.picture.medium,
          email: user.email
        };
      });
      setUsers(users)
      console.log(users)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>OMISS Members</h2>
        <HashRouter basename='/'>
          
          {/* PAGE LINKS HERE for hashrouter (NOT NEEDED?)++++++++++++++++++++++++++++++++++++++++++++++++++ */}
          {/* <div className="nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
            <hr />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </div> */}
          {/* PAGE LINKS HERE for hashrouter (NOT NEEDED?)++++++++++++++++++++++++++++++++++++++++++++++++++ */}

        </HashRouter>
      </header>
      <body>
        <Employee />
        <ResultList />
        {/* <ResultList login={users.login.username} /> */}
      </body>
    </div>
  );
}
const Home = () => <div><p></p></div>
const About = () => <div><p></p></div>
export default App;

