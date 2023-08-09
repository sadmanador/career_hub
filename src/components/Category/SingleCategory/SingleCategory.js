import React from "react";

const SingleCategory = ({ dt }) => {
  const {  img, category_name, vacancy } = dt;

  return <div>
    <div className="bg-violet-50 m-4 lg:m-0 rounded-md p-14">
          <img src={img} alt="" />
          <h3 className="text-xl font-semibold my-4">{category_name}</h3>
          <p>{vacancy}</p>
        </div>
  </div>;
};

export default SingleCategory;
