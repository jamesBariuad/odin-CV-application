import { useState } from "react";
import "./styles/styles.css";
import EducationForm from "./components/EducationForm.jsx";
import ExperienceForm from "./components/ExperienceForm.jsx";
import GeneralInfoForm from "./components/GeneralInfoForm.jsx";
import CVPreview from "./components/CVPreview.jsx";

function App() {
  const [data, setData] = useState({});

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

  const handleAddEducationFormField = () => {
    setData({
      ...data,
      education: [...data.education, { schoolName: "", course: "", date: "" }],
    });
  };

  const handleEducationInputChange = (e, index) => {
    const { name, value } = e.target;
    setData((prevData) => {
      const updatedEducation = [...prevData.education];
      updatedEducation[index] = {
        ...updatedEducation[index],
        [name]: value,
      };
      return {
        ...prevData,
        education: updatedEducation,
      };
    });
  };

  const handleAddExperienceClick = () => {
    console.log(data);
    setData({
      ...data,
      experience: [
        ...data.experience,
        {
          companyName: "",
          dateActive: "",
          positionTitle: "",
          responsibilities: "",
        },
      ],
    });
  };

  const handleExperienceInputChange = (e,index) => {
    const { name, value } = e.target;
    setData((prevData) => {
      const updatedExperience = [...prevData.experience];
      updatedExperience[index] = {
        ...updatedExperience[index],
        [name]: value,
      };
      return {
        ...prevData,
        experience: updatedExperience,
      };
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
        <GeneralInfoForm
          handleGeneralInfoChange={handleGeneralInfoChange}
          data={data}
        />
        <EducationForm
          handleEducationInputChange={handleEducationInputChange}
          handleAddEducationFormField={handleAddEducationFormField}
          data={data}
        />
        <ExperienceForm
          handleExperienceInputChange={handleExperienceInputChange}
          handleAddExperienceClick={handleAddExperienceClick}
          data={data}
        />
        <button type="button" onClick={loadDefaultData}>
          Load Default Data
        </button>
      </form>
      <div>
        <CVPreview
          data={Object.keys(data).length == 0 ? loadDefaultData() : data}
        />
      </div>
    </>
  );
}

export default App;
