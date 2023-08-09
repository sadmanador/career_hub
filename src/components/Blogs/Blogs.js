import React from "react";
import HeaderBanner from "../commons/HeaderBanner/HeaderBanner";

const Blogs = () => {
  return (
    <div className="p-4 bg-violet-50">
      <HeaderBanner data={"Blogs"}></HeaderBanner>
      <div className="my-8 lg:max-w-7xl lg:mx-auto">
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            When should you use context API?
          </div>
          <div className="collapse-content">
            <p>
              In many cases where, there are data or information need to be
              found across all the components, and continuous props drilling is
              quite tedious, context API is the best way of binding data to all
              the components. such situation could arise during common fetch
              data loading, access of auth state, access of user state, &
              anything that might be need from every components.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is a custom hook?
          </div>
          <div className="collapse-content">
            <p>
              Custom hook are development friendly reuseable functions that adds
              up new functionality to React UI. Before custom hooks, developers
              needed to rely on third party library. After custom hook necessity
              of library are decreased due to library often bugged for version
              clash.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is useRef?
          </div>
          <div className="collapse-content">
            <p>
              A specialized hook for retrieving data from input fields. not only
              input fields, ref can be used during many cases. ref kinda works
              similar to state, state is not a ideal technique for getting input
              data.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is useMemo?
          </div>
          <div className="collapse-content">
            <p>
              useMemo is react hook allows to catch memorized value of a
              calculation. in simple words, useMemo store calculation results
              between generating results and rendering them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
