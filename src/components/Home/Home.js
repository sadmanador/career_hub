import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Jobs from "../Jobs/Jobs";

const Home = () => {
  const [showMore, setShowMore] = useState(4);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("/detailed_jobs_data.json")
      .then((res) => res.json())
      .then((data) => setJobs(data.slice(0, showMore)));
  }, [showMore]);

  return (
    <div>
      <Banner />
      <Category />
      <div className="lg:max-w-7xl lg:mx-auto">
        <section className="text-center">
          <h2 className="lg:text-5xl text-2xl font-semibold">Featured Jobs</h2>
          <p className="my-8 mx-6 lg:mx-0">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
          <div className="md:grid grid-cols-2 gap-6 mb-8 mx-4 lg:mx-0">
            {jobs.map((job) => (
              <Jobs key={job.id} job={job}></Jobs>
            ))}
          </div>
        </section>
        <div className="text-center mb-8">
          {showMore < 12 ? (
            <button className="btn-custom" onClick={() => setShowMore(12)}>
              See All Jobs
            </button>
          ) : (
            <button className="btn-custom ml-3" onClick={() => setShowMore(4)}>
              Show Less Jobs
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
