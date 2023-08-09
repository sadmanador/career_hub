import React from "react";

const HeaderBanner = ({ data }) => {
  return (
    <div className="bg-violet-50 mb-7 lg:flex justify-around">
        <img className="self-end" src="assets/images/Vector.png" alt="" />
        <h1 className="text-center font-semibold lg:text-4xl text-2xl lg:py-16">
          {data}
        </h1>
        <img className="self-start" src="assets/images/Vector-1.png" alt="" />
    </div>
  );
};

export default HeaderBanner;
