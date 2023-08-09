import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  getStoredCard,
  removeFromDb,
} from "../../localStorage/localStorageSave";
import AppliedJobCard from "../AppliedJobCard/AppliedJobCard";
import { toast } from "react-hot-toast";
import HeaderBanner from "../commons/HeaderBanner/HeaderBanner";

const AppliedJob = () => {
  const { jobs } = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [filter, setFilter] = useState("");

  //code responsible for getting the localStorage data
  useEffect(() => {
    const storedJobs = getStoredCard();

    const savedJob = [];
    for (const id in storedJobs) {
      const addedJob = jobs.find((job) => job.id == id);
      if (addedJob) {
        const applied = storedJobs[id];
        addedJob.applied = applied;
        savedJob.push(addedJob);
      }
    }

    if (filter == "remote") {
      const remoteJobOnly = savedJob.filter((job) => job.remote);
      setAppliedJobs(remoteJobOnly);
    } else if (filter == "onsite") {
      const onSiteJobOnly = savedJob.filter((job) => job.onsite);
      setAppliedJobs(onSiteJobOnly);
    } else {
      setAppliedJobs(savedJob);
    }
  }, [filter, jobs]);

  const handleCancelJob = (id) => {
    const confirm = window.confirm(
      "Are you sure, You wanna cancel this application?"
    );

    if (confirm) {
      const remaining = appliedJobs.filter((product) => product.id !== id);
      setAppliedJobs(remaining);
      removeFromDb(id);
      toast.error("You application has been cancelled");
    }
    return;
  };

  return (
    <div>
      <HeaderBanner
      data={"Applied Jobs"}
      ></HeaderBanner>
      <div className="lg:max-w-7xl lg:mx-auto">
      <div className="my-8 flex justify-end">
        <select
          onChange={(event) => setFilter(event.target.value)}
          className="select select-bordered"
        >
          <option disabled selected>
            Sort by
          </option>
          <option value="all">All</option>
          <option value="onsite">Onsite</option>
          <option value="remote">Remote</option>
        </select>
      </div>
        {appliedJobs.map((appliedJob) => (
          <AppliedJobCard
            key={appliedJob.id}
            appliedJob={appliedJob}
            handleCancelJob={handleCancelJob}
          ></AppliedJobCard>
        ))}
      </div>
    </div>
  );
};

export default AppliedJob;
