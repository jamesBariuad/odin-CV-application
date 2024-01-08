import React from "react";

const Experience = ({
  handleAddExperienceClick,
  handleExperienceInputChange,
  handleExperienceDeleteClick,
  data,
}) => {
  const displayAndBindInputs = data.experience.map((entry, index) => {
    return (
      <div key={index} className="mb-5">
        <div className={"mb-2"}>
          <label htmlFor={`companyName${index}`} className={"form-label fw-medium mb-0"}>
            Company Name:
          </label>
          <input
            type="text"
            name="companyName"
            id={`companyName${index}`}
            placeholder="Enter Company Name"
            onChange={(e) => handleExperienceInputChange(e, index)}
            value={entry.companyName}
            className={"form-control"}
          />
        </div>
        <div className={"mb-2"}>
          <label
            htmlFor={`positionTitle${index}`}
            className={"form-label mb-0 fw-medium"}
          >
            Position Title:
          </label>
          <input
            type="text"
            name="positionTitle"
            id={`positionTitle${index}`}
            placeholder="Enter Position Title"
            onChange={(e) => handleExperienceInputChange(e, index)}
            value={entry.positionTitle}
            className={"form-control"}
          />
        </div>
        <div className={"mb-2"}>
          <label
            htmlFor={`responsibilities${index}`}
            className={"form-label mb-0 fw-medium"}
          >
            Responsibilities:
          </label>
          <textarea
            type="text"
            name="responsibilities"
            id={`responsibilities${index}`}
            placeholder="Enter Description"
            onChange={(e) => handleExperienceInputChange(e, index)}
            value={entry.responsibilities}
            className={"form-control"}
            style={{ height: "100px" }}
          ></textarea>
        </div>
        <div className={"mb-2"}>
          <label htmlFor={`dateActive${index}`} className={"form-label mb-0 fw-medium"}>
            Date Active:
          </label>
          <input
            type="textarea"
            name="dateActive"
            id={`dateActive${index}`}
            placeholder="Enter Start and End Date"
            onChange={(e) => handleExperienceInputChange(e, index)}
            value={entry.dateActive}
            className={"form-control"}
          />
        </div>
        {data.experience.length > 1 && index == data.experience.length - 1 && (
          <button type="button" className="btn btn-outline-danger float-end" onClick={handleExperienceDeleteClick}>
            Remove
          </button>
        )}
      </div>
    );
  });

  return (
    <>
      {displayAndBindInputs}
      <button
        type="button"
        onClick={handleAddExperienceClick}
        className="btn btn-secondary"
      >
        Add Experience
      </button>
    </>
  );
};

export default Experience;
