import React from "react";
import EducationList from "./EducationList";
import ExperienceList from "./ExperienceList";

const CVPreview = ({ data }) => {
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
        <EducationList data={data} />
      </div>
      <div>
        <h2>Practical Experience</h2>
        <ExperienceList data={data}/>
      </div>
    </>
  );
};

export default CVPreview;
