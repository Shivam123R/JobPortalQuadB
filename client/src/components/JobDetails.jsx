import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { jobData } from "./Dashboard"; // Import jobData directly
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function JobDetails() {
  const { id } = useParams();
  const job = jobData.find((job) => job.id === Number(id));

  if (!job) {
    return <div>Job not found</div>;
  }

  const { user } = useSelector((state) => state.auth);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check local storage to see if the form has been submitted before
    const submittedData = localStorage.getItem(
      `jobApplication_${user?.email}_${job.id}`
    );
    if (submittedData) {
      setIsSubmitted(true);
    }

    // Cleanup function to remove data from local storage when unmounting
    return () => {
      localStorage.removeItem(`jobApplication_${user?.email}_${job.id}`);
    };
  }, [user, job.id]);

  const handleApplyClick = () => {
    if (!isSubmitted) {
      // Display a success toast
      toast.success("Application submitted successfully");

      // Display user details in an alert
      alert(`User Details:\nName: ${user?.name}\nEmail: ${user?.email}`);

      // Mark the form as submitted and store data in local storage
      setIsSubmitted(true);
      localStorage.setItem(
        `jobApplication_${user?.email}_${job.id}`,
        JSON.stringify(user)
      );
    } else {
      // If already submitted, display a message or take appropriate action
      toast.info("Application already submitted");
    }
  };

  return (
    <div className="p-4 min-h-[80vh]">
      <h2 className="text-3xl font-medium">{job.title}</h2>
      <p className="text-xl my-4">{job.description}</p>
      <p className="text-xl">Location: {job.location}</p>
      <button
        className="bg-purple-500 w-full mt-4 p-2 text-white font-bold text-xl rounded-md"
        onClick={handleApplyClick}
        disabled={isSubmitted}
      >
        {isSubmitted ? "Application Submitted" : "Apply"}
      </button>
    </div>
  );
}

export default JobDetails;
