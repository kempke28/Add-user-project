import React, { useState, Fragment } from 'react';
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
    <Fragment>
      <AddUser onAddUser={addUserHandler} ></AddUser>
      <UsersList users={usersList}></UsersList>
    </Fragment>
  );
}

export default App;


//Fragments components are like empty components to use to wrap entire components structure. Enable use less and cleaner code, and less using of HTML tags.