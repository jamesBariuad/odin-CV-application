import React from "react";

const EducationList = ({ data }) => {
  return (
    <>
      {data.education.map((entry,index) => (
        <div key={index}>
          <div>{entry.schoolName}</div>
          <div>{entry.course}</div>
          <div>{entry.date}</div>
        </div>
      ))}
    </>
  );
};

export default EducationList;
