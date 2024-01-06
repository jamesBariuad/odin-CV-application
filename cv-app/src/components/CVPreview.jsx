import React from "react";

const CVPreview = ({ data, }) => {
 
  return (
    <>
      CVPreview
      <div>
        <h1>{data.generalInfo.name}</h1>
        <div>{data.generalInfo.email}</div>
        <div>{data.generalInfo.phone}</div>
      </div>
      <div>
        <h2>Educational Experience</h2>
        <div>
          <div>{data.schoolName}</div>
          <div>{data.course}</div>
          <div>{data.date}</div>
        </div>
      </div>
      <div>
        <h2>Practical Experience</h2>
        <div>
            <div>{data.companyName}</div>
            <div>{data.positionTitle}</div>
            <div>{data.responsibilities}</div>
            <div>{data.dateActive}</div>
        </div>
      </div>
    </>
  );
};

export default CVPreview;
