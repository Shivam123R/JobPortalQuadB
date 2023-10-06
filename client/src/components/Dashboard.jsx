import React, { useState } from "react";
import { Link } from "react-router-dom";

// Define the jobData array outside of the component
export const jobData = [
  {
    id: 1,
    title: "JavaScript Developer",
    description:
      "We are looking for a skilled JavaScript Developer to join our team. In this role, you will be responsible for developing and maintaining web applications, implementing interactive features, and collaborating with our team of designers and developers.",
    location: "Gurgaon",
  },
  {
    id: 2,
    title: "Python Developer",
    description:
      "We are seeking a highly skilled Python Developer to join our dynamic team. The ideal candidate should have a strong background in Python development and a passion for creating efficient and scalable software solutions. You will collaborate with cross-functional teams to design, develop, and maintain Python-based applications that meet our clients' needs.",
    location: "Noida",
  },
  // Add data for other jobs here
];

function Dashboard() {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [showMore, setShowMore] = useState(false);

  const handleLanguageChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedLanguage(selectedValue);
  };

  const JavaScriptInfo = ({ jobId }) => {
    const job = jobData.find((job) => job.id === jobId);

    if (!job) return null;

    return (
      <div className="min-w-[80%] bg-purple-500 rounded-md p-4 mt-4">
        <h3 className="text-xl text-white font-bold uppercase">
          Job Title : <span className="font-normal">{job.title}</span>
        </h3>
        <p className="mt-2 text-slate-100 max-w-[700px] mx-auto">
          <span className="text-xl font-bold">Job Description</span>:{" "}
          {showMore ? job.description : job.description.slice(0, 100) + "..."}
        </p>
        {!showMore && (
          <Link to={`/job/${job.id}`} className="text-white font-bold">
            Read More
          </Link>
        )}
        <p className="mt-2 text-slate-100">
          <span className="font-bold mr-1 ">
            <span className="text-xl font-bold">Location</span>: {job.location}
          </span>
        </p>
      </div>
    );
  };

  const PythonInfo = ({ jobId }) => {
    const job = jobData.find((job) => job.id === jobId);

    if (!job) return null;

    return (
      <div className="min-w-[80%] bg-purple-500 rounded-md p-4 mt-4">
        <h3 className="text-xl text-white font-bold uppercase">
          Job Title : <span className="font-normal">{job.title}</span>
        </h3>
        <p className="mt-2 text-slate-100 max-w-[700px] mx-auto">
          <span className="text-xl font-bold">Job Description</span>:{" "}
          {showMore ? job.description : job.description.slice(0, 100) + "..."}
        </p>
        {!showMore && (
          <Link to={`/job/${job.id}`} className="text-white font-bold">
            Read More
          </Link>
        )}
        <p className="mt-2 text-slate-100">
          <span className="font-bold mr-1 ">
            <span className="text-xl font-bold">Location</span>: {job.location}
          </span>
        </p>
      </div>
    );
  };

  const languageComponents = {
    javascript: { component: JavaScriptInfo, jobId: 1 },
    python: { component: PythonInfo, jobId: 2 },
  };

  const SelectedLanguageComponent = languageComponents[selectedLanguage];

  return (
    <>
      <div className="flex flex-col items-center min-h-[85vh] justify-center text-center p-2">
        <h2 className="text-4xl font-medium text-[#4e4e4e]">
          Select a Programming Language:
        </h2>
        <select
          value={selectedLanguage}
          onChange={handleLanguageChange}
          className="mt-4 outline-none border border-purple-400 p-1 rounded-md md:w-[400px]"
        >
          <option value="">Select Language</option>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          {/* Add options for other languages here */}
        </select>
        {selectedLanguage && <p>You selected: {selectedLanguage}</p>}
        {SelectedLanguageComponent && (
          <SelectedLanguageComponent.component
            jobId={SelectedLanguageComponent.jobId}
          />
        )}
      </div>
    </>
  );
}

export default Dashboard;
