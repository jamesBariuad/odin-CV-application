import React from "react";
import EducationList from "./EducationList";
import ExperienceList from "./ExperienceList";
import Icon from "@mdi/react";
import { mdiPhone } from "@mdi/js";
import { mdiMail } from "@mdi/js";

const CVPreview = ({ data }) => {
  return (
    <>
      <div
        className="border border-2 shadow-sm w-100 "
        style={{ minHeight:"29.7cm", width:"21cm" }}
      >
        <div
          className="text-center p-4 text-white"
          style={{ backgroundColor: "#075a5c" }}
        >
          <h1 className="mb-0">{data.generalInfo.name}</h1>
          <div className="d-flex justify-content-center flex-wrap justify-content-evenly">
            <div className="d-flex">
              <Icon path={mdiMail} size={1} />
              <div>{data.generalInfo.email}</div>
            </div>
            <div className="d-flex">
              <Icon path={mdiPhone} size={1} />
              <div>{data.generalInfo.phone}</div>
            </div>
          </div>
        </div>
        <div className="pt-5 px-5">
          <div className="mb-4">
            <h2 className="d-flex justify-content-center fs-5 fw-bold bg-secondary-subtle bg-opacity-50" style={{color:"#075a5c"}}>Education</h2>
            <EducationList data={data} />
          </div>
          <div>
            <h2 className="d-flex justify-content-center fs-5 fw-bold bg-secondary-subtle bg-opacity-50" style={{color:"#075a5c"}}>Practical Experience</h2>
            <ExperienceList data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CVPreview;
