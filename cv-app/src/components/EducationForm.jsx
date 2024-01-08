import React from "react";

const Education = ({
  handleEducationInputChange,
  handleAddEducationFormField,
  handleEducationDeleteClick,
  data,
}) => {
  const displayAndBindInputs = data.education.map((entry, index) => {
    return (
      <div key={index} className="mb-5">
        <div className={"mb-2"}>
          <label
            htmlFor={`schoolName${index}`}
            className={"form-label mb-0 fw-medium"}
          >
            School Name:
          </label>
          <input
            type="text"
            name="schoolName"
            id={`schoolName${index}`}
            placeholder="Enter school / university"
            onChange={(e) => handleEducationInputChange(e, index)}
            value={entry.schoolName}
            className={"form-control"}
          />
        </div>
        <div className={"mb-2"}>
          <label
            htmlFor={`course${index}`}
            className={"form-label mb-0 fw-medium"}
          >
            Course:
          </label>
          <input
            type="text"
            name="course"
            id={`course${index}`}
            placeholder="Enter Degree / Field of Study"
            onChange={(e) => handleEducationInputChange(e, index)}
            value={entry.course}
            className={"form-control"}
          />
        </div>
        <div className={"mb-3"}>
          <label
            htmlFor={`date${index}`}
            className={"form-label mb-0 fw-medium"}
          >
            Date:
          </label>
          <input
            type="text"
            name="date"
            id={`date${index}`}
            placeholder="Enter Start-End Date"
            onChange={(e) => handleEducationInputChange(e, index)}
            value={entry.date}
            className={"form-control"}
          />
        </div>
        {data.education.length > 1 && index == data.education.length - 1 && (
          <button type="button" className="btn btn-outline-danger float-end" onClick={handleEducationDeleteClick}>
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
        onClick={handleAddEducationFormField}
        className="btn btn-secondary"
      >
        Add Education
      </button>
    </>
  );
};

export default Education;
