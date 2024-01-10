import { useState } from "react";
import EducationForm from "./components/EducationForm.jsx";
import ExperienceForm from "./components/ExperienceForm.jsx";
import GeneralInfoForm from "./components/GeneralInfoForm.jsx";
import CVPreview from "./components/CVPreview.jsx";

function App() {
  const [data, setData] = useState({
    generalInfo: {
      name: "Howard Roberts",
      email: "howard.roberts@mailinator.com",
      phone: "+1 316 115-3415",
    },
    education: [
      {
        schoolName: "Random High School",
        course:
          "Bachelor of Science in Electronics and Communications Engineering",
        date: "22-Jan-2020",
      },
      {
        schoolName: "Tech Institute of Technology",
        course: "Master of Science in Computer Science",
        date: "15-May-2023",
      },
    ],
    experience: [
      {
        companyName: "Giles and Booth Traders",
        positionTitle: "Software Developer",
        responsibilities:
          "As a Software Developer at Giles and Booth Traders, I am responsible for designing, developing, and maintaining high-quality software code. I actively participate in code reviews, identify and address technical debt, and collaborate with cross-functional teams to ensure successful project delivery. Additionally, I contribute to the ongoing improvement of development processes and mentor junior team members.",
        dateActive: "22-Apr-2021 - Present",
      },
      {
        companyName: "Digital Solutions Co.",
        positionTitle: "Intern",
        responsibilities:
          "During my internship at Digital Solutions Co., I had the opportunity to learn and contribute to various software projects. My responsibilities included researching and implementing new technologies, collaborating with team members on coding tasks, and providing support in troubleshooting and debugging. I actively participated in team discussions, gaining valuable insights into the software development lifecycle.",
        dateActive: "05-Jun-2019 - 20-Dec-2019",
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
        email: "howard.roberts@mailinator.com",
        phone: "+1 316 115-3415",
      },
      education: [
        {
          schoolName: "Random High School",
          course:
            "Bachelor of Science in Electronics and Communications Engineering",
          date: "22-Jan-2020",
        },
        {
          schoolName: "Tech Institute of Technology",
          course: "Master of Science in Computer Science",
          date: "15-May-2023",
        },
      ],
      experience: [
        {
          companyName: "Giles and Booth Traders",
          positionTitle: "Software Developer",
          responsibilities:
            "As a Software Developer at Giles and Booth Traders, I am responsible for designing, developing, and maintaining high-quality software code. I actively participate in code reviews, identify and address technical debt, and collaborate with cross-functional teams to ensure successful project delivery. Additionally, I contribute to the ongoing improvement of development processes and mentor junior team members.",
          dateActive: "22-Apr-2021 - Present",
        },
        {
          companyName: "Digital Solutions Co.",
          positionTitle: "Intern",
          responsibilities:
            "During my internship at Digital Solutions Co., I had the opportunity to learn and contribute to various software projects. My responsibilities included researching and implementing new technologies, collaborating with team members on coding tasks, and providing support in troubleshooting and debugging. I actively participated in team discussions, gaining valuable insights into the software development lifecycle.",
          dateActive: "05-Jun-2019 - 20-Dec-2019",
        },
      ],
    });
  };

  return (
    <div className="container vw-100 row px-0 mx-auto ">
      <div className="p-3 col">
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
      <div className="pt-5  col">
        <CVPreview data={data} />
      </div>
    </div>
  );
}

export default App;
