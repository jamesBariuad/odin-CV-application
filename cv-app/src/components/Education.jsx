import React from "react";

const Education = ({ handleDataChange }) => {

  const educationData = []
  educationData.push
  return (
    <>
      <h3>Education</h3>
      <button type="button" onClick={handleAddEducation}>Add Education</button>
      
      {/* <> <div>
        <label htmlFor="schoolName">School Name</label>
        <input
          type="text"
          name="schoolName"
          id="schoolName"
          placeholder="Enter school / university"
          onChange={handleDataChange}
        />
      </div>
      <div>
        <label htmlFor="course">Course</label>
        <input
          type="text"
          name="course"
          id="course"
          placeholder="Enter Degree / Field of Study"
          onChange={handleDataChange}
        />
      </div>
      <div>
        <label htmlFor="date">Start Date:</label>
        <input
          type="text"
          name="date"
          id="date"
          placeholder="Enter Start-End Date"
          onChange={handleDataChange}
        />
      </div></> */}
    </>
  );
};

export default Education;
