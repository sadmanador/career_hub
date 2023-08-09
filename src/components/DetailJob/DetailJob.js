import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addToLocalStorage } from "../../localStorage/localStorageSave";
import { toast } from "react-hot-toast";
import HeaderBanner from "../commons/HeaderBanner/HeaderBanner";

const DetailJob = () => {
  const { id } = useParams();
  const [detailJob, setDetailJob] = useState({});
  const [storedJob, setStoredJob] = useState([]);

  const {
    description,
    responsibilities,
    education,
    experience,
    salary,
    title,
    email,
    phone,
    location,
  } = detailJob;

  useEffect(() => {
    fetch("/detailed_jobs_data.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.find((d) => id == d.id);
        setDetailJob(filteredData);
      });
  }, [id]);

  const handleApplied = (job) => {
    let newAppliedJobs = [];
    const exists = storedJob.find((sJ) => sJ.id == job.id);
    if (!exists) {
      job.applied = 1;
      newAppliedJobs = [...storedJob, job];
      toast.success(`"${job.title}" successfully applied to "${job.name}"`)
    } else if (exists) {
      return toast.error(`Don't you remember, You already applied to ${job.name}`)
    }
    setStoredJob(newAppliedJobs);
    addToLocalStorage(job.id);
  };

  return (
    <div>
      <HeaderBanner
      data={"Job Description"}
      ></HeaderBanner>
      <div className="lg:grid grid-cols-custom-grid gap-16 mb-8 lg:max-w-7xl lg:mx-auto">
      <aside className="my-8">
        <p>
          <span className="font-bold">Job Description:</span> {description}
        </p>
        <p className="my-8">
          <span className="font-bold">Job Responsibilities:</span>{" "}
          {responsibilities}
        </p>
        <p>
          <span className="font-bold">Educational Requirement:</span> <br />
          {education}
        </p>
        <p className="my-8">
          <span className="font-bold">Experience:</span> <br />
          {experience}
        </p>
      </aside>
      <aside className="my-8">
        <div className="bg-violet-50 rounded px-6">
          <h3 className="border-b-2 pb-2 pt-4 text-2xl font-semibold">
            Job Details
          </h3>
          <div className="py-6">
            <p className="mb-3">
              <img
                className="inline mr-2"
                src="/assets/icons/Frame.png"
                alt=""
              />
              <span>Salary:</span> {salary}
            </p>
            <p>
              <img
                className="inline mr-2"
                src="/assets/icons/Frame-1.png"
                alt=""
              />
              <span>Job Title:</span> {title}
            </p>
          </div>
          <h3 className="border-b-2 pb-2 pt-4 text-2xl font-semibold">
            Contact Information
          </h3>
          <div className="py-6">
            <p>
              <img
                className="inline mr-2"
                src="/assets/icons/Frame-2.png"
                alt=""
              />
              <span>Phone:</span> {phone}
            </p>
            <p className="my-3">
              <img
                className="inline mr-2"
                src="/assets/icons/Frame-3.png"
                alt=""
              />
              <span>Email:</span> {email}
            </p>
            <p>
              <img
                className="inline mr-2"
                src="/assets/icons/Frame-4.png"
                alt=""
              />
              <span>Address:</span> {location}
            </p>
          </div>
        </div>
        <div className="text-center mt-6">
          <button
            className="btn-custom w-full"
            onClick={() => handleApplied(detailJob)}
          >
            Apply Now
          </button>
        </div>
      </aside>
    </div>
    </div>
  );
};

export default DetailJob;
