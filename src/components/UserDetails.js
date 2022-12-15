import React from "react";
import "./UserDetails.css";
import UserDetailsForm from "./UserDetailsForm";

const UserDetails = (props) => {
  const saveUserDetailsHandler = (event) => {
    const dataToSend = {
      firstName: event.firstName,
      lastName: event.lastName,
      email: event.email,
      address: event.address,
    };
    props.handleSubmit({ ...dataToSend });
  };

  return (
    <div className="new-shopping-item">
      <UserDetailsForm
        onSaveUserData={saveUserDetailsHandler}
      ></UserDetailsForm>
    </div>
  );
};

export default UserDetails;
