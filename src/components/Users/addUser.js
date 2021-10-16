import React, { useState, useRef } from "react";

import Wrapper from '../Helpers/Wrapper';
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal.js";
import classes from "./addUser.module.css";





/* useRef hook to make a reference to the input that is been typed, without using the other useState hook,
the code is commented in case of reference of using any useState hook. */

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();


/*   const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState(""); */
  const [displayError, setDisplayError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredNameValue = nameInputRef.current.value;
    const enteredAgeValue = ageInputRef.current.value;

    if (enteredNameValue.trim().length === 0 || enteredAgeValue.trim() === 0) {
        setDisplayError({
        title: "invalid name",
        message: "please enter a valid name!",
      });
      return;
    }
    if (+enteredAgeValue < 1) {
        setDisplayError({
        title: "invalid Age",
        message: "please enter an Age!",
      });
      return;
    }
    
    props.onAddUser(enteredNameValue, enteredAgeValue);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
 /*    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  }; */
};

  const displayErrorHandler = () => {
      setDisplayError(null);
  }

  return (
    <Wrapper>
      {displayError && (
      <ErrorModal
        title={displayError.title}
        message={displayError.message}
        onConfirm={displayErrorHandler}
      ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
/*          value={enteredUsername}
            onChange={usernameChangeHandler} */
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
/*          value={enteredAge}
            onChange={ageChangeHandler} */
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};


export default AddUser;
