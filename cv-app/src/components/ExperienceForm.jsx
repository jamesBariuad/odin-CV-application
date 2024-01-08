import React from "react";

const Experience = ({
  handleAddExperienceClick,
  handleExperienceInputChange,
  data,
}) => {
  const displayAndBindInputs = data.experience.map((entry, index) => {
    return (
      <div key={index}>
        <div>
          <label htmlFor={`companyName${index}`}>Company Name:</label>
          <input
            type="text"
            name="companyName"
            id={`companyName${index}`}
            placeholder="Enter Company Name"
            onChange={(e) => handleExperienceInputChange(e, index)}
            value={entry.companyName}
          />
        </div>
        <div>
          <label htmlFor={`positionTitle${index}`}>Position Title:</label>
          <input
            type="text"
            name="positionTitle"
            id={`positionTitle${index}`}
            placeholder="Enter Position Title"
            onChange={(e) => handleExperienceInputChange(e, index)}
            value={entry.positionTitle}
          />
        </div>
        <div>
          <label htmlFor={`responsibilities${index}`}>Responsibilities:</label>
          <textarea
            type="text"
            name="responsibilities"
            id={`responsibilities${index}`}
            placeholder="Enter Description"
            onChange={(e) => handleExperienceInputChange(e, index)}
            value={entry.responsibilities}
          ></textarea>
        </div>
        <div>
          <label htmlFor={`dateActive${index}`}>Date Active:</label>
          <input
            type="textarea"
            name="dateActive"
            id={`dateActive${index}`}
            placeholder="Enter Start and End Date"
            onChange={(e) => handleExperienceInputChange(e, index)}
            value={entry.dateActive}
          />
        </div>
      </div>
    );
  });

  return (
    <>
      <h3>Experience:</h3>
      {displayAndBindInputs}
      <button type="button" onClick={handleAddExperienceClick}>
        Add Experience
      </button>
    </>
  );
};

export default Experience;
