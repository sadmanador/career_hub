import React from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FcCancel } from "react-icons/fc";

const AppliedJobCard = ({ handleCancelJob, appliedJob }) => {
  const { title, logo_url, name, id, location, salary, types,time } = appliedJob;

  return (
    <div className="my-6 lg:grid grid-cols-appliedJob-grid rounded-xl border-2 py-8 px-4">
      <div className="flex gap-12">
        <div>
          <img className="w-36" src={logo_url} alt="logo" />
        </div>
        <div>
          <h3 className="font-semibold text-2xl">{title}</h3>
          <p className="my-4 text-lg text-gray-600">{name}</p>
          <div>
            <button className="btn btn-sm btn-outline btn-primary mr-4">
              {types}
            </button>
            <button className="btn btn-sm btn-outline btn-primary">
              {time}
            </button>
          </div>
          <div className="flex gap-6 my-4">
            <p>
              <IoLocationOutline className="inline mr-1" />
              {location}
            </p>
            <p>
              <AiOutlineDollar className="inline mr-1" />
              Salary: {salary}
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex">
        <div className="self-center">
          <Link to={`/job/${id}`}>
            <button className="btn-custom mr-4">View Details</button>
          </Link>
          <button className="btn btn-error btn-outline" onClick={()=>handleCancelJob(id)}>
            <FcCancel className="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobCard;
