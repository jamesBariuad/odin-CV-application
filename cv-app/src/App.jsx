import { useState } from "react";
import "./styles/styles.css";
import Education from "./components/EducationForm.jsx";
import Experience from "./components/Experience.jsx";
import GeneralInfo from "./components/GeneralInfoForm.jsx";
import CVPreview from "./components/CVPreview.jsx";

function App() {
  const [data, setData] = useState({});
  console.log(data);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);

  //   const formDataObject = {};
  //   formData.forEach((value, key) => {
  //     formDataObject[key] = value;
  //   });
  //   console.log("Form Data Object:", formDataObject);
  //   setData(formDataObject);
  // };

  const handleDataChange = (e) => {
    const entry = e.target.id;
    const value = e.target.value;

    setData({
      ...data,
      generalInfo: {
        ...data.generalInfo,
        [entry]: value,
      },
    });
  };

  const handleGeneralInfoChange = (e) => {
    const entry = e.target.id;
    const value = e.target.value;
    setData({
      ...data,
      generalInfo: {
        ...data.generalInfo,
        [entry]: value,
      },
    });
  };

  const loadDefaultData = () => {
    setData({
      generalInfo: {
        name: "Howard Roberts",
        email: "piki@mailinator.com",
        phone: "+1 (316) 115-3415",
      },
      education: [
        {
          schoolName: "Random HighSchool",
          course:
            "Bachelor of Science in Electronics and Communications Engineering",
          date: "22-Jan-2020",
        },
      ],
      experience: [
        {
          companyName: "Giles and Booth Traders",
          positionTitle: "Developer",
          responsibilities: "Maintain Code, Refactor Codes",
          dateActive: "22-Apr-2021",
        },
      ],
    });
  };

  return (
    <>
      <form>
        <GeneralInfo handleGeneralInfoChange={handleGeneralInfoChange} data={data} />
        <Education handleDataChange={handleDataChange} />
        <Experience handleDataChange={handleDataChange} />
      <button type="button" onClick={loadDefaultData}>
        Load Default Data
      </button>
      </form>
      <div>
        <CVPreview data={Object.keys(data).length==0?loadDefaultData(): data   } />
      </div>
    </>
  );
}

export default App;
