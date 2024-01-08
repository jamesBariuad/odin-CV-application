import React from "react";

const GeneralInfo = ({ handleGeneralInfoChange, data }) => {
  return (
    <>
      <div className={"mb-2"}>
        <label htmlFor="name" className={"form-label mb-0 fw-medium"}>Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="First and Last Name"
          onChange={handleGeneralInfoChange}
          value={data.generalInfo.name}
          autoComplete='name'
          className={"form-control"}
        />
      </div>
      <div className={"mb-2"}>
        <label htmlFor="email"  className={"form-label mb-0 fw-medium"}>Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
          onChange={handleGeneralInfoChange}
          value={data.generalInfo.email}
          autoComplete='email'
          className={"form-control"}
        />
      </div>
      <div className={"mb-2"}>
        <label htmlFor="phone"  className={"form-label mb-0 fw-medium"}>Phone:</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Enter Phone Number"
          onChange={handleGeneralInfoChange}
          value={data.generalInfo.phone}
          autoComplete='tel'
          className={"form-control"}
        />
      </div>
    </>
  );
};

export default GeneralInfo;
