import { useState } from "react";
import "./styles/styles.css";
import EducationForm from "./components/EducationForm.jsx";
import ExperienceForm from "./components/ExperienceForm.jsx";
import GeneralInfoForm from "./components/GeneralInfoForm.jsx";
import CVPreview from "./components/CVPreview.jsx";

function App() {
  const [data, setData] = useState({
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

  const handleEducationDeleteClick = () => {
    const educationDataArrayCopy = [...data.education];
    educationDataArrayCopy.pop();
    setData({
      ...data,
      education: [...educationDataArrayCopy],
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

  const handleExperienceDeleteClick = () => {
    const experienceDataArrayCopy = [...data.experience];
    experienceDataArrayCopy.pop();
    setData({
      ...data,
      experience: [...experienceDataArrayCopy],
    });
  };

  const handleExperienceInputChange = (e, index) => {
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
    <div className={"container d-flex flex-wrap"}>
      <div className="p-5 w-50">
        <button
          type="button"
          className="btn btn-outline-secondary mb-1 float-end me-5"
          onClick={loadDefaultData}
        >
          Load Default Values
        </button>
        <form className="p-5 accordion" id="form-accordion">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <h5>General Info</h5>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#form-accordion"
            >
              <div className="accordion-body">
                <GeneralInfoForm
                  handleGeneralInfoChange={handleGeneralInfoChange}
                  data={data}
                />
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <h5>Education</h5>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#form-accordion"
            >
              <div className="accordion-body">
                <EducationForm
                  handleEducationInputChange={handleEducationInputChange}
                  handleAddEducationFormField={handleAddEducationFormField}
                  handleEducationDeleteClick={handleEducationDeleteClick}
                  data={data}
                />
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <h5>Experience:</h5>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#form-accordion"
            >
              <div className="accordion-body">
                <ExperienceForm
                  handleExperienceInputChange={handleExperienceInputChange}
                  handleAddExperienceClick={handleAddExperienceClick}
                  handleExperienceDeleteClick={handleExperienceDeleteClick}
                  data={data}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="p-3 pt-5 w-50">
        <CVPreview data={data} />
      </div>
    </div>
  );
}

export default App;
