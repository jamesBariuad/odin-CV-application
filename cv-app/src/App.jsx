import { useState } from "react";
import "./App.css";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import GeneralInfo from "./components/GeneralInfo.jsx";
import CVPreview from "./components/CVPreview.jsx";

function App() {
  const [data, setData] = useState({

  });

  const defaultData = {
    schoolName: "Random HighSchool",
    name: "Howard Roberts",
    email: "piki@mailinator.com",
    phone: "+1 (316) 115-3415",
    course: "Bachelor of Science in Electronics and Communications Engineering",
    date: "22-Jan-2020",
    companyName: "Giles and Booth Traders",
    positionTitle: "Developer",
    responsibilities: "Maintain Code, Refactor Codes",
    dateActive: "22-Apr-2021",
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    console.log("Form Data Object:", formDataObject);
    setData(formDataObject);
  };

  const handleDataChange = (e) => {
    const entry = e.target.id;
    const value = e.target.value;

    setData({ ...data, [entry]: value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <GeneralInfo handleDataChange={handleDataChange} />
        <Education handleDataChange={handleDataChange} />
        <Experience handleDataChange={handleDataChange} />
        <button type="submit">Submit</button>
      </form>
      <CVPreview data={data} />
    </>
  );
}

export default App;
