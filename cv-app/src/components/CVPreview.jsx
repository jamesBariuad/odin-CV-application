import React from "react";

const CVPreview = ({ data }) => {
  console.log(data);
  // schoolName: "Wendy Dale",
  // name: "Howard Roberts",
  // email: "piki@mailinator.com",
  // phone: "+1 (316) 115-3415",
  // course: "Voluptatem Aut aute",
  // date: "22-Jan-2020",
  // companyName: "Giles and Booth Traders",
  // positionTitle: "Sed pariatur Quibus",
  // responsibilities: "Veniam quia et qui ",
  // dateActive: "22-Apr-2021",
  return (
    <>
      CVPreview
      <div>
        <h1>{data.name}</h1>
        <div>{data.email}</div>
        <div>{data.phone}</div>
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
