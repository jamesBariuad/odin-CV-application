import React from "react";

const ExperienceList = ({ data }) => {
  return (
    <>
      {data.experience.map((entry, index) => (
        <div key={index} className="row mb-3">
          <div  className="col-3">{entry.dateActive}</div>
          <div className="lh-sm col">
            <div className="fw-bold">{entry.companyName}</div>
            <div>{entry.positionTitle}</div>
            <div>{entry.responsibilities}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ExperienceList;
