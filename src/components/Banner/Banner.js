import React from "react";

const Banner = () => {
  return (
    <section className="banner mx-4 lg:mx-0 mb-8 lg:flex justify-between bg-violet-50">
      <div className="lg:px-36 px-4 mb-8">
        <h1 className="lg:text-7xl text-2xl font-bold">
          One Step <br /> Closer To Your <br />{" "}
          <span className="text-violet-500">Dream Job</span>
        </h1>
        <p className="lg:text-lg font-medium my-5">
          Explore thousands of job opportunities with all the <br /> information
          you need. Its your future. Come find it. Manage all your job
          application from start to finish.
        </p>
        <button className="btn-custom">
          Get Started
        </button>
      </div>
      <div className="self-end">
        <img src="assets/images/P3OLGJ1.png" alt="banner-img" />
      </div>
    </section>
  );
};

export default Banner;
