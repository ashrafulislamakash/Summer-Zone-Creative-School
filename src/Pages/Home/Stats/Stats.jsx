import React from "react";

const Stats = () => {
  return (
    <div className="container text-center mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 my-12 md:my-24">
      <div>
        <h2 className=" font-bold text-4xl lg:text-6xl text-orange mb-4">
          15K
        </h2>
        <p className="font-bold text-sm lg:text-lg text-dark2">
          Happy Customers
        </p>
      </div>
      <div>
        <h2 className="font-bold text-4xl lg:text-6xl text-orange mb-4">
          150K
        </h2>
        <p className="font-bold text-sm lg:text-lg text-dark2">
          Monthly Visitors
        </p>
      </div>
      <div>
        <h2 className="font-bold text-4xl lg:text-6xl text-orange mb-4">15</h2>
        <p className="font-bold text-sm lg:text-lg text-dark2">
          Countries Worldwide
        </p>
      </div>
      <div>
        <h2 className="font-bold text-4xl lg:text-6xl text-orange mb-4">
          100+
        </h2>
        <p className="font-bold text-sm lg:text-lg text-dark2">
          Top Instructors{" "}
        </p>
      </div>
    </div>
  );
};

export default Stats;
