import React from "react";

const Experience = ({handleDataChange}) => {
  return (
    <>
      <h3>Experience:</h3>
      <div>
        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          name="companyName"
          id="companyName"
          placeholder="Enter Company Name"
          onChange={handleDataChange}
        />
      </div>
      <div>
        <label htmlFor="positionTitle">Position Title:</label>
        <input
          type="text"
          name="positionTitle"
          id="positionTitle"
          placeholder="Enter Position Title"
          onChange={handleDataChange}
        />
      </div>
      <div>
        <label htmlFor="responsibilities">Responsibilities:</label>
        <textarea
          type="text"
          name="responsibilities"
          id="responsibilities"
          placeholder="Enter Description"
          onChange={handleDataChange}
        ></textarea>
      </div>
      <div>
        <label htmlFor="dateActive">Date Active:</label>
        <input
          type="textarea"
          name="dateActive"
          id="dateActive"
          placeholder="Enter Start and End Date"
        />
      </div>
    </>
  );
};

export default Experience;
