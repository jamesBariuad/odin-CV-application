import React from "react";
import EducationList from "./EducationList";
import ExperienceList from "./ExperienceList";

const CVPreview = ({ data }) => {
  return (
    <>
      CVPreview
      <div
        className="border border-2 shadow-sm w-100 "
        style={{ minHeight: "75vh" }}
      >
        <div
          className="text-center p-4 text-white"
          style={{ backgroundColor: "#075a5c" }}
        >
          <h1 className="mb-0">{data.generalInfo.name}</h1>
          <div className="d-flex justify-content-center gap-5">
            <div>✆{data.generalInfo.email}</div>
            <div>{data.generalInfo.phone}</div>
          </div>
        </div>
        <div>
          <h2>Educational Experience</h2>
          <hr style={{height:"10px", border:"solid 2px black"}}/>
          <EducationList data={data} />
        </div>
        <div>
          <h2>Practical Experience</h2>
          <ExperienceList data={data} />
        </div>
      </div>
    </>
  );
};

export default CVPreview;
