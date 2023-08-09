import React from "react";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";

const Jobs = ({ job }) => {
  const { job_title, logo_url, company_name, id, location, salary,types,time } = job;

  return (
    <div className="text-start p-5 border-2 rounded-md mb-2">
      <img src={logo_url} className="w-32" alt="" />
      <h3 className="font-semibold text-2xl">{job_title}</h3>
      <p className="my-4 text-lg text-gray-600">{company_name}</p>
      <div>
      <button className="btn btn-sm btn-outline btn-primary mr-4">{types}</button>  
      <button className="btn btn-sm btn-outline btn-primary">{time}</button>  
      </div>
      <div className="flex gap-6 my-4">
        <p>
          <IoLocationOutline className="inline mr-1"/>
          {location}
        </p>
        <p>
          <AiOutlineDollar className="inline mr-1"/>
          Salary: {salary}</p>
      </div>
      <Link to={`/job/${id}`}>
        <button className="btn-custom">View Details</button>
      </Link>
    </div>
  );
};

export default Jobs;
