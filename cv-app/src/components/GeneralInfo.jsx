import React from "react";

const GeneralInfo = ({ handleDataChange }) => {
  return (
    <>
      <h3>General Info</h3>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="First and Last Name"
          onChange={handleDataChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
          onChange={handleDataChange}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Enter Phone Number"
          onChange={handleDataChange}
        />
      </div>
    </>
  );
};

export default GeneralInfo;
