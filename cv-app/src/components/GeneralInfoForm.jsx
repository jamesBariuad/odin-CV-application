import React from "react";

const GeneralInfo = ({ handleGeneralInfoChange, data }) => {
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
          onChange={handleGeneralInfoChange}
          value={data.generalInfo.name}
          autoComplete='name'
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
          onChange={handleGeneralInfoChange}
          value={data.generalInfo.email}
          autoComplete='email'
        />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Enter Phone Number"
          onChange={handleGeneralInfoChange}
          value={data.generalInfo.phone}
          autoComplete='tel'
        />
      </div>
    </>
  );
};

export default GeneralInfo;
