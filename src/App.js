import React, { useState } from 'react';
import AddUser from './components/Users/addUser';
import UsersList from './components/Users/UsersList';


function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: userName, age: userAge, id: Math.random().toString() },
      ]
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} ></AddUser>
      <UsersList users={usersList}></UsersList>
    </div>
  );
}

export default App;