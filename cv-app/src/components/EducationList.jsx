import React from "react";

const EducationList = ({ data }) => {
  return (
    <>
      {data.education.map((entry, index) => (
        <div key={index} className="row mb-3">
          <div className="col-3">{entry.date}</div>
          <div className="col">
            <div className="fw-bold">{entry.schoolName}</div>
            <div className="lh-sm">{entry.course}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default EducationList;
