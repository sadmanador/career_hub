import React, { useEffect, useState } from "react";
import SingleCategory from "./SingleCategory/SingleCategory";

const Category = () => {
const [data, setData] = useState([]);


useEffect(() => {
  fetch('/category_data.json')
  .then(res => res.json())
  .then(data=> setData(data))
}
,[])

  return (
    <section className="my-16 px-4 lg:px-0">
      <div className="text-center">
        <h2 className="lg:text-5xl text-2xl font-semibold">Job Category List</h2>
        <p className="my-8">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="lg:flex justify-around">
        {
          data.map(dt=> <SingleCategory
          key={dt.id}
          dt={dt}
          ></SingleCategory>)
        }
      </div>
    </section>
  );
};

export default Category;
