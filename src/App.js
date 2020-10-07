import React, {useEffect, useState }from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import Employee from './components/Employee.js'
import ResultList from './components/ResultList';
import API from './utils/API'
function App() {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [userIndex, setUserIndex] = useState(0);

  // When the component mounts, a call will be made to get random users.
  useEffect(() => {
    loadUsers();
  }, []);

  function nextUser(userIndex) {
    // Ensure that the user index stays within our range of users
    if (userIndex >= users.length) {
      userIndex = 0;
    }
    setUser(users[userIndex]);
    setUserIndex(userIndex);
  }

  function previousUser(userIndex) {
    // Ensure that the user index stays within our range of users
    if (userIndex < 0) {
      userIndex = users.length - 1;
    }
    setUser(users[userIndex]);
    setUserIndex(userIndex);
  }

  function handleBtnClick(event) {
    // Get the title of the clicked button
    const btnName = event.target.getAttribute("data-value");
    if (btnName === "next") {
      const newUserIndex = userIndex + 1;
      nextUser(newUserIndex);
    } else {
      const newUserIndex = userIndex - 1;
      previousUser(newUserIndex);
    }
  }

  function loadUsers() {
    API.fetchUsers()
      .then(users => {
        setUsers(users);
        setUser(users[0]);
      })

      .catch(err => console.log(err));
  }

    return (
    <div className="App">
      <header className="App-header">
      
      </header>
      <body>
        <Employee />
        <ResultList />
      </body>
    </div>
  );
}

export default App;
