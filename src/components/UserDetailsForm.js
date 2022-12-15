import React, { useState } from "react";
import "./UserDetailsForm.css";

const UserDetailsForm = (props) => {
  const [enterdFirstName, setEnteredFirstName] = useState("");
  const [enterdLastName, setEnteredLastName] = useState("");
  const [enterdEmail, setEnteredEmail] = useState("");
  const [enterdAddress, setEnteredAddress] = useState("");

  const FirstNameChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredFirstName(event.target.value);
  };
  const LastNameChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredLastName(event.target.value);
  };
  const EmailChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredEmail(event.target.value);
  };
  const AddressChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredAddress(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // becouse we dont want the page to reload
    const userData = {
      firstName: enterdFirstName,
      lastName: enterdLastName,
      email: enterdEmail,
      address: enterdAddress,
    };

    console.log(userData);
    props.onSaveUserData(userData);
    setEnteredFirstName("");
    setEnteredLastName("");
    setEnteredEmail("");
    setEnteredAddress("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-shopping__controls">
        <div className="new-shopping__control">
          <label>First Name</label>
          <input
            type="text"
            value={enterdFirstName}
            onChange={FirstNameChangeHandler}
          />
        </div>
        <div className="new-shopping__control">
          <label>Last Name</label>
          <input
            type="text"
            value={enterdLastName}
            onChange={LastNameChangeHandler}
          />
        </div>
        <div className="new-shopping__control">
          <label>Email</label>
          <input
            type="email"
            value={enterdEmail}
            onChange={EmailChangeHandler}
          />
        </div>
        <div className="new-shopping__control">
          <label>Address</label>
          <input
            type="text"
            value={enterdAddress}
            onChange={AddressChangeHandler}
          />
        </div>
      </div>
      <div className="new-shopping__actions">
        <button type="submit">Add User Details</button>
      </div>
    </form>
  );
};

export default UserDetailsForm;
