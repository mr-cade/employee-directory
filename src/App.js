import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import './App.css';
import Employee from './components/Employee.js'
import ResultList from './components/ResultList';
import API from './utils/API'

function App() {
  const [users, setUsers] = useState([]);
  // When the component mounts, a call will be made to get random users.
  useEffect(() => {
    this.loadUsers();
  }, []);

  // function loadUsers() {
  //   const data = API.fetchUsers()
  //   console.log("users: " + data)
  //   setUsers(data)
  // }

  loadUsers = () => {
    API.fetchUsers().then(users => {
      console.log("users: " + users)
      setUsers(users)
    })
  }

  return (
    <div className="App">
      <header className="App-header">

      </header>
      <body>
        <Employee />
        {/* <ResultList login={users.login.username} /> */}
      </body>
    </div>
  );
}

export default App;
