import React from "react";

const Education = ({
  handleEducationInputChange,
  handleAddEducationFormField,
  data,
}) => {
  const displayAndBindInputs = data.education.map((entry, index) => {
    return (
      <div key={index}>
        <div>
          <label htmlFor={`schoolName${index}`}>School Name</label>
          <input
            type="text"
            name="schoolName"
            id={`schoolName${index}`}
            placeholder="Enter school / university"
            onChange={(e) => handleEducationInputChange(e, index)}
            value={entry.schoolName}
          />
        </div>
        <div>
          <label htmlFor={`course${index}`}>Course</label>
          <input
            type="text"
            name="course"
            id={`course${index}`}
            placeholder="Enter Degree / Field of Study"
            onChange={(e) => handleEducationInputChange(e, index)}
            value={entry.course}
          />
        </div>
        <div>
          <label htmlFor={`date${index}`}>Date:</label>
          <input
            type="text"
            name="date"
            id={`date${index}`}
            placeholder="Enter Start-End Date"
            onChange={(e) => handleEducationInputChange(e, index)}
            value={entry.date}
          />
        </div>
      </div>
    );
  });

  return (
    <>
      <h3>Education</h3>
      {displayAndBindInputs}
      <button type="button" onClick={handleAddEducationFormField}>
        Add Education
      </button>
    </>
  );
};

export default Education;
